# Dockerfile
FROM ruby:3.2.2

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /book-shelves
WORKDIR /book-shelves
COPY Gemfile /book-shelves/Gemfile
COPY Gemfile.lock /book-shelves/Gemfile.lock
RUN bundle install
COPY . /book-shelves

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
