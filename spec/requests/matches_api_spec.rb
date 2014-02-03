require 'spec_helper'

describe 'Matches API' do

	context '/matches' do

    before do
      @match = create(:match)
      @player1 = @match.players.first
      @player2 = @match.players.last
    end

    def increment_score(player)
      patch api_match_path(@match), { player_id: player.id } 

      @response, @json = response, JSON.parse(response.body)
    end

    def decrement_score(player)
      patch api_match_path(@match), { player_id: player.id, decrement: true } 

      @response, @json = response, JSON.parse(response.body)
    end

    it 'returns a success status code' do
      increment_score(@player1)
      expect(@response).to be_success
    end

    it 'returns a json file' do
      increment_score(@player1)
      expect(@json['p1points']).to eq 1
    end

    it 'can increment score for a player' do
      expect { increment_score(@player1) }.to change { @match.current_points_for_player(1) }.by(1)
    end

    it 'can decrement score for a player' do
      increment_score(@player2)
      expect { decrement_score(@player2) }.to change { @match.current_points_for_player(2) }.by(-1)
    end

    it 'returns current state of game' do
      10.times{increment_score(@player1)}
      5.times{increment_score(@player2)}
      expect(@json['p1points']).to eq 10
      expect(@json['p2points']).to eq 5
      expect(@json['p1games']).to eq 0
      expect(@json['p2games']).to eq 0
      expect(@json['currently_serving']).to eq 1
    end

  end
	
end


    

   