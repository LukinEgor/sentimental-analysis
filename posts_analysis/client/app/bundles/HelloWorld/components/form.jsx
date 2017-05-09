import React from 'react';
import ReactOnRails from 'react-on-rails';


export default class Form extends React.Component {

  submit(e) {
    const csrfToken = ReactOnRails.authenticityToken();
    return $.ajax({
      url: '/post_analysis/run',
      type: 'POST',
      data: {
        uft8: "✓",
        authenticity_token: csrfToken,
        keyword: $('#keyword').val(),
        count: $('#count').val()
      }
    })
  }

  render() {
    return <div>
      <p><input type="text" name="keyword" id="keyword"/></p>
      <p><input type="text" name="count" id="count"/></p>
      <button onClick={this.submit}>Let's Go</button>
    </div>;
  }
}
