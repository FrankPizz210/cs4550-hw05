defmodule Digits4.Game do
  def new do
    %{
      target: get_rand_num([]),
      guesses: [],
      guess: [],
      decipher: [],
    }
  end

  def guess(st, gg) do
    arr = Enum.reverse(string_to_arr(gg, 0, []))
    gg = String.split(gg, "")
    gg = valid_guess(gg, 0)
    if gg != -1 do
      code = get_code(gg, st.target, 0, 0, 0)
      %{
        st | guess: arr,
             guesses: [gg | st.guesses],
             decipher: [code | st.decipher]
      }
    else
      gg = []
    end
  end

  def valid_guess(gg, index) do
    set = MapSet.new(gg)
    IO.puts MapSet.to_list(set)
    if length(MapSet.to_list(set)) == 5 do
      gg
    else
      -1
    end
  end

  def string_to_arr(str, index, acc) do
    if length(acc) != String.length(str) do
      num = String.at(str, index)
      string_to_arr(str, index+1, [num | acc])
    else
      acc
    end
  end

  def get_rand_num(acc) do
    num = Enum.random(0..9)
    if length(acc) == 4 do
      acc
    else
      if num in acc do
        get_rand_num(acc)
      else
        get_rand_num([num | acc])
      end
    end
  end

  def get_code(gg, target, bulls, cows, index) do
    ss = List.delete(gg, "")
    if index != 4 do
      {gg_int, _} = Integer.parse(Enum.at(ss, index))
      if gg_int == Enum.at(target, index) do
        get_code(ss, target, bulls+1, cows, index+1)
      else
        if gg_int in target do
          get_code(ss, target, bulls, cows+1, index+1)
        else
          get_code(ss, target, bulls, cows, index+1)
        end
      end
    else
      "#{bulls}A#{cows}B"
    end
  end

  def view(st) do
    %{
      guess: "",
      guesses: Enum.reverse(st.guesses),
      decipher: Enum.reverse(st.decipher),
      target: st.target,
    }
  end
end
