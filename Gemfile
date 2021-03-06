source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.1'

# Use postgresql as the database for Active Record
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]


group :development, :test do
	gem 'rspec-rails'
	gem 'capybara', '~> 2.1'
	gem 'shoulda-matchers'
	gem 'poltergeist', github: 'jonleighton/poltergeist'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'guard-rspec', require: false
	gem 'growl'
end

gem 'devise'
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'

gem 'haml'


gem 'websocket-rails'
gem 'thin'
gem 'gmaps4rails'
gem 'geocoder'
gem 'activerecord-session_store', github: 'rails/activerecord-session_store'

group :production do
	gem 'rails_12factor'
	gem 'rails_log_stdout',           github: 'heroku/rails_log_stdout'
end	