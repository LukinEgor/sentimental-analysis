FROM ruby:2.3.3

RUN apt-get update && apt-get install -y build-essential
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm

RUN mkdir /myapp
WORKDIR /myapp
ADD package.json /myapp/package.json
ADD Gemfile /myapp/Gemfile
ADD Gemfile.lock /myapp/Gemfile.lock

RUN gem install bundler \
    && bundle install --jobs 4
RUN npm install
