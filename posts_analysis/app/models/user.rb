class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:vkontakte]

  # attr_accessible :email, :password, :password_confirmation, :remember_me
  # attr_accessible :nickname, :provider, :url, :username
  #
  def self.find_for_vkontakte_oauth access_token
    if user = User.where(:url => access_token.info.urls.Vkontakte).first
      user
    else
      email = "#{access_token.info.name.gsub(' ', '').downcase + access_token.extra.raw_info.id.to_s}@vk.com"
      User.create!(:provider => access_token.provider, :url => access_token.info.urls.Vkontakte,
                   :username => access_token.info.name, :nickname => access_token.extra.raw_info.domain,
                   :email => email, :password => Devise.friendly_token[0,20], :token => access_token.credentials.token)
    end
  end
end
