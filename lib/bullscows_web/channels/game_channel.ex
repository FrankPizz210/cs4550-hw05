defmodule BullscowsWeb.GameChannel do
  use BullscowsWeb, :channel

  @impl true
  def join("game:" <> _id, payload, socket) do
    if authorized?(payload) do
      IO.puts "Calling New"
      game = Digits4.Game.new()
      socket = assign(socket, :game, game)
      view = Digits4.Game.view(game)
      {:ok, view, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end
  #
  # @impl true
  # def handle_in("guess", %{"letter" => ll}, socket) do
  #   game0 = socket.assigns[:game]
  #   game1 = Digits4.Game.guess(game0, 11)
  #   socket = assign(socket, :game, game1)
  #   view = Digits4.Game.view(game1)
  #   {:reply, {:ok, view}, socket}
  # end

  @impl true
  def handle_in("guess", two, socket) do
    game0 = socket.assigns[:game]
    game1 = Digits4.Game.guess(game0, two)
    socket = assign(socket, :game, game1)
    view = Digits4.Game.view(game1)
    {:reply, {:ok, view}, socket}
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  # @impl true
  # def handle_in("ping", payload, socket) do
  #   {:reply, {:ok, payload}, socket}
  # end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (game:lobby).
  # @impl true
  # def handle_in("shout", payload, socket) do
  #   broadcast socket, "shout", payload
  #   {:noreply, socket}
  # end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
