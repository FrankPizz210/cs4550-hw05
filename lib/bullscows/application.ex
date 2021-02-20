defmodule Bullscows.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      BullscowsWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Bullscows.PubSub},
      # Start the Endpoint (http/https)
      BullscowsWeb.Endpoint
      # Start a worker by calling: Bullscows.Worker.start_link(arg)
      # {Bullscows.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Bullscows.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    BullscowsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
