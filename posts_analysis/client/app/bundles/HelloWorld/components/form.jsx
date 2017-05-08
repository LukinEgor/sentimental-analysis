import React from 'react';
import ReactOnRails from 'react-on-rails';


export default class Form extends React.Component {

  onSubmit(e) {
    const csrfToken = ReactOnRails.authenticityToken();
    return $.ajax({
      url: '/post_analysis/run',
      type: 'POST',
      data: {
        uft8: "✓",
        authenticity_token: csrfToken,
        keyword: e.target.keyword.value,
        count: e.target.count.value
      }
    })
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      <p><input type="text" name="keyword" id="keyword"/></p>
      <p><input type="text" name="count" id="count"/></p>
      <button type="submit">Let's Go</button>
    </form>;
  }
}
