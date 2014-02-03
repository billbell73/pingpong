require 'spec_helper'

describe Player do
  
	it {should have_many :scores}
	it {should have_many :matches}

end
