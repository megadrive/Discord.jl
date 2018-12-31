var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Discord.jl-1",
    "page": "Home",
    "title": "Discord.jl",
    "category": "section",
    "text": "Discord.jl is the solution for creating Discord bots with the Julia programming language."
},

{
    "location": "#Why-Julia/Discord.jl?-1",
    "page": "Home",
    "title": "Why Julia/Discord.jl?",
    "category": "section",
    "text": "Strong, expressive type system: No fast-and-loose JSON objects here.\nNon-blocking: API calls return immediately and can be awaited when necessary.\nSimple: Multiple dispatch allows for a small, elegant core API.\nFast: Julia is fast like C but still easy like Python.\nRobust: Resistant to bad event handlers and/or requests. Errors are introspectible for debugging.\nLightweight: Cache what is important but shed dead weight with TTL.\nGateway independent: Ability to interact with Discord\'s API without establishing a gateway connection.\nDistributed: Process-based sharding requires next to no intervention and you can even run shards on separate machines.For usage examples, see the examples/ directory."
},

{
    "location": "#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "client/#",
    "page": "Client",
    "title": "Client",
    "category": "page",
    "text": "CurrentModule = Discord"
},

{
    "location": "client/#Discord.Client",
    "page": "Client",
    "title": "Discord.Client",
    "category": "type",
    "text": "Client(\n    token::String;\n    prefix::String=\"\",\n    presence::Union{Dict, NamedTuple}=Dict(),\n    strategies::Dict{DataType, <:CacheStrategy}=Dict(),\n    version::Int=6,\n) -> Client\n\nA Discord bot. Clients can connect to the gateway, respond to events, and make REST API calls to perform actions such as sending/deleting messages, kicking/banning users, etc.\n\nBot Token\n\nA bot token can be acquired by creating a new application here. Make sure not to hardcode the token into your Julia code! Use an environment variable or configuration file instead.\n\nCommand Prefix\n\nThe prefix keyword specifies the command prefix, which is used by commands added with add_command!. It can be changed later, both globally and on a per-guild basis, with set_prefix!.\n\nPresence\n\nThe presence keyword sets the bot\'s presence upon connection. It also sets defaults for future calls to set_game. The schema here must be followed.\n\nCache Control\n\nBy default, most data that comes from Discord is cached for later use. However, to avoid memory leakage, not all of it is kept forever. The default setings are to keep everything but Messages, which are deleted after 6 hours, forever. Although the default settings are sufficient for most workloads, you can specify your own strategies per type with the strategies keyword. Keys can be any of the following:\n\nGuild\nDiscordChannel\nMessage\nUser\nMember\nPresence\n\nFor potential values, see CacheStrategy.\n\nThe cache can also be disabled/enabled permanently and temporarily as a whole with enable_cache! and disable_cache!.\n\nAPI Version\n\nThe version keyword chooses the Version of the Discord API to use. Using anything but 6 is not officially supported by the Discord.jl developers.\n\nSharding\n\nSharding is handled automatically. The number of available processes is the number of shards that are created. See the sharding example for more details.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.enable_cache!",
    "page": "Client",
    "title": "Discord.enable_cache!",
    "category": "function",
    "text": "enable_cache!(c::Client)\nenable_cache!(f::Function c::Client)\n\nEnable the cache. do syntax is also accepted.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.disable_cache!",
    "page": "Client",
    "title": "Discord.disable_cache!",
    "category": "function",
    "text": "disable_cache!(c::Client)\ndisable_cache!(f::Function, c::Client)\n\nDisable the cache. do syntax is also accepted.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.me",
    "page": "Client",
    "title": "Discord.me",
    "category": "function",
    "text": "me(c::Client) -> Nullable{User}\n\nGet the Client\'s bot user.\n\n\n\n\n\n"
},

{
    "location": "client/#Client-1",
    "page": "Client",
    "title": "Client",
    "category": "section",
    "text": "Client\nenable_cache!\ndisable_cache!\nme"
},

{
    "location": "client/#Base.open",
    "page": "Client",
    "title": "Base.open",
    "category": "function",
    "text": "open(c::Client; delay::Period=Second(7))\n\nConnect a Client to the Discord gateway.\n\nThe delay keyword is the time between shards connecting. It can be increased from its default if you are using multiple shards and frequently experiencing invalid sessions upon  connection.\n\n\n\n\n\n"
},

{
    "location": "client/#Base.isopen",
    "page": "Client",
    "title": "Base.isopen",
    "category": "function",
    "text": "isopen(c::Client) -> Bool\n\nDetermine whether the Client is connected to the gateway.\n\n\n\n\n\n"
},

{
    "location": "client/#Base.close",
    "page": "Client",
    "title": "Base.close",
    "category": "function",
    "text": "close(c::Client)\n\nDisconnect the Client from the gateway.\n\n\n\n\n\n"
},

{
    "location": "client/#Base.wait",
    "page": "Client",
    "title": "Base.wait",
    "category": "function",
    "text": "wait(c::Client)\n\nWait for an open Client to close.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.request_guild_members",
    "page": "Client",
    "title": "Discord.request_guild_members",
    "category": "function",
    "text": "request_guild_members(\n    c::Client,\n    guilds::Union{Integer, Vector{<:Integer};\n    query::AbstractString=\"\",\n    limit::Int=0,\n) -> Bool\n\nRequest offline guild members of one or more Guilds. GuildMembersChunk events are sent by the gateway in response. More details here.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.update_voice_state",
    "page": "Client",
    "title": "Discord.update_voice_state",
    "category": "function",
    "text": "update_voice_state(\n    c::Client,\n    guild::Integer,\n    channel::Nullable{Integer},\n    mute::Bool,\n    deaf::Bool,\n) -> Bool\n\nJoin, move, or disconnect from a voice channel. A VoiceStateUpdate event is sent by the gateway in response. More details here.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.update_status",
    "page": "Client",
    "title": "Discord.update_status",
    "category": "function",
    "text": "update_status(\n    c::Client,\n    since::Nullable{Int},\n    activity::Nullable{Activity},\n    status::Union{PresenceStatus, AbstractString},\n    afk::Bool,\n) -> Bool\n\nIndicate a presence or status update. A PresenceUpdate event is sent by the gateway in response. More details here.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.heartbeat_ping",
    "page": "Client",
    "title": "Discord.heartbeat_ping",
    "category": "function",
    "text": "heartbeat_ping(c::Client) -> Nullable{Period}\n\nGet the Client\'s ping time to the gateway. If the client is not connected, or no heartbeats have been sent/acknowledged, nothing is returned.\n\n\n\n\n\n"
},

{
    "location": "client/#Gateway-1",
    "page": "Client",
    "title": "Gateway",
    "category": "section",
    "text": "Base.open\nBase.isopen\nBase.close\nBase.wait\nrequest_guild_members\nupdate_voice_state\nupdate_status\nheartbeat_ping"
},

{
    "location": "client/#Discord.add_handler!",
    "page": "Client",
    "title": "Discord.add_handler!",
    "category": "function",
    "text": "add_handler!(\n    c::Client,\n    [T::Type{<:AbstractEvent}],\n    handler::Function;\n    tag::Symbol=gensym(),\n    predicate::Function=alwaystrue,\n    fallback::Function=donothing,\n    priority::Int=100,\n    count::Nullable{Int}=nothing,\n    timeout::Nullable{Period}=nothing,\n    until::Function=alwaysfalse,\n    wait::Bool=false,\n    compile::Bool=false,\n    kwargs...,\n) -> Nullable{Vector{Any}}\n\nAdd an event handler. do syntax is also accepted.\n\nHandler Function\n\nThe handler function does the real work and must take two arguments: A Client and an AbstractEvent (or a subtype). If an event type T is supplied, then the handler is registered for that event. Otherwise, the second argument of the handler must be annotated, and the type annotation determines what events will invoke the handler. Union types are also accepted to register handlers for multiple events.\n\nHandler Tag\n\nThe tag keyword gives a label to the handler, which can be used to remove it with delete_handler!.\n\nPredicate/Fallback Functions\n\nThe predicate keyword specifies a predicate function. The handler will only run if this function returns true. Otherwise, a fallback function, specified by the fallback keyword, is run. Their signatures should match that of the handler.\n\nHandler Priority\n\nThe priority keyword indicates the handler\'s priority relative to other handlers for the same event. Handlers with higher values execute before those with lower ones.\n\nHandler Expiry\n\nHandlers can have multiple types of expiries. The count keyword sets the number of times a handler is run before expiring. The timeout keyword determines how long the handler remains active. The until keyword takes a function which is called on the handler\'s previous results (in a Vector), and if it returns true, the handler expires. These keywords can be combined; the first condition to be met causes the handler to expire.\n\nBlocking Handlers + Result Collection\n\nTo collect results from a handler, set the wait keyword along with n, timeout, and/or until. The call will block until the handler expires, at which point the return value of each invocation is returned in a Vector.\n\nForcing Precompilation\n\nHandler functions are precompiled without running them, but it\'s not always successful, especially if your functions are not type-safe. If the compile keyword is set, precompilation is forced by running the predicate and handler on a randomized input. Any trailing keywords are passed to the constructors of the event and its fields.\n\nExamples\n\nBasic \"hello world\" with explicit event type:\n\nadd_handler!(c, MessageCreate, (c, e) -> println(e.message.content); tag=:print)\n\nAdding a handler with a predicate and fallback:\n\nhandler(::Client, e::ChannelCreate) = println(e.channel.name)\npredicate(::Client, e::ChannelCreate) = length(e.channel.name) < 10\nfallback(::Client, ::ChannelCreate) = println(\"channel name too long\")\nadd_handler!(c, handler; predicate=predicate, fallback=fallback)\n\nAssigning maximum priority to a handler:\n\nhandler(:::Client, ::MessageCreate) = println(\"this runs before any other handlers!\")\nadd_handler!(c, handler; priority=typemax(Int))\n\nAdding a handler with various expiry conditions:\n\nhandler(::Client, e::ChannelCreate) = e.channel.name\nuntil(results::Vector{Any}) = \"foo\" in results\nadd_handler!(c, handler; count=10, timeout=Minute(1), until=until)\n\nAggregating results of a handler:\n\nhandler(::Client, e::MessageCreate) = e.message.content\nmsgs = add_handler!(c, handler; count=5, wait=true)\n\nForcing precompilation:\n\nhandler(::Client, e::MessageDelete) = @show e\nadd_handler!(c, handler; compile=true, id=0xff)\n\n\n\n\n\nadd_handler!(c::Client, m::Module; kwargs...)\n\nAdd all of the event handlers defined in a module. Any function you wish to use as a handler must be exported. Only functions with correct, annotated type signatures (see above) are used.\n\nnote: Note\nIf you set keywords, they are applied to all of the handlers in the module. For example, if you add two handlers for the same event type with the same tag, one of them will be immediately overwritten.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.delete_handler!",
    "page": "Client",
    "title": "Discord.delete_handler!",
    "category": "function",
    "text": "delete_handler!(c::Client, T::Type{<:AbstractEvent}, tag::Symbol)\ndelete_handler!(c::Client, T::Type{<:AbstractEvent})\n\nDelete event handlers. If no tag is supplied, all handlers for the event are deleted. Using the tagless method is generally not recommended because it also clears default handlers which maintain the client state. If you do want to delete a default handler, use DEFAULT_HANDLER_TAG.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.DEFAULT_HANDLER_TAG",
    "page": "Client",
    "title": "Discord.DEFAULT_HANDLER_TAG",
    "category": "constant",
    "text": "Tag assigned to default handlers, which you can use to delete them.\n\n\n\n\n\n"
},

{
    "location": "client/#Event-Handlers-1",
    "page": "Client",
    "title": "Event Handlers",
    "category": "section",
    "text": "See Events for more details.add_handler!\ndelete_handler!\nDEFAULT_HANDLER_TAG"
},

{
    "location": "client/#Discord.add_command!",
    "page": "Client",
    "title": "Discord.add_command!",
    "category": "function",
    "text": "add_command!(\n    c::Client,\n    name::Symbol,\n    handler::Function;\n    help::AbstractString=\"\",\n    parsers::Vector=[],\n    separator::StringOrChar=\' \',\n    pattern::Regex=defaultpattern(name, length(parsers), separator),\n    allowed::Vector{<:Integer}=Snowflake[],\n    permissions::Integer=PERM_NONE,\n    cooldown::Nullable{Period}=nothing,\n    fallback_parsers::Function=donothing,\n    fallback_allowed::Function=donothing,\n    fallback_permissions::Function=donothing,\n    fallback_cooldown::Function=donothing,\n    priority::Int=100,\n    count::Nullable{Int}=nothing,\n    timeout::Nullable{Period}=nothing,\n    compile::Bool=false,\n    kwargs...,\n)\n\nAdd a text command handler. do syntax is also accepted.\n\nHandler Function\n\nThe handler function must accept a Client and a Message. Additionally, it can accept any number of additional arguments, which are captured from pattern and parsed with parsers (see below).\n\nCommand Pattern\n\nThe pattern keyword specifies how to invoke the command. The given Regex must match the message contents after having removed the command prefix. By default, it\'s the command name with as many wildcard capture groups as there are parsers, separated by the separator keyword (a space character by default).\n\nCommand Help\n\nThe help keyword specifies a help string which can be used by add_help!.\n\nArgument Parsing\n\nThe parsers keyword sets the parsers of the command arguments, and can contain both types and functions. If pattern contains captures, then they are run through the parsers before being passed into the handler. For repeating arguments, see Splat.\n\nAuthorization + Required Permissions\n\nThe allowed keyword specifies Users or Roles (by ID) that are allowed to use the command. The permissions keyword sets the minimum permissions that command callers must have.\n\nRate Limiting\n\nThe cooldown keyword sets the rate at which a user can invoke the command. The default of nothing indicates no limit.\n\nFallback Functions\n\nThe fallback_* keywords specify functions to be run whenever a command is called but cannot be run, such as failed argument parsing, missing permissions, or rate limiting. They should accept a Client and a Message.\n\nAdditional keyword arguments are a subset of those to add_handler!.\n\nExamples\n\nBasic echo command with a help string:\n\nadd_command!(c, :echo, (c, m) -> reply(c, m, m.content); help=\"repeat a message\")\n\nThe same, but excluding the command part:\n\nadd_command!(c, :echo, (c, m, msg) -> reply(c, m, msg); pattern=r\"^echo (.+)\")\n\nParsing a subtraction expression with custom parsers and separator:\n\nadd_command!(\n    c, :sub, (c, m, a, b) -> reply(c, m, string(a - b));\n    parsers=[Float64, Float64], separator=\'-\',\n)\n\nSplatting some comma-separated numbers with a parsing fallback function:\n\nadd_command!(\n    c, :sum, (c, m, xs...) -> reply(c, m, string(sum(collect(xs))));\n    parsers=[Splat(Float64, \',\')],\n    fallback_parsers=(c, m) -> reply(c, m, \"Args must be numbers.\"),\n)\n\n\n\n\n\nadd_command!(c::Client, m::Module; compile::Bool=false; kwargs...)\n\nAdd all of the bot commands defined in a module. To set up commands to be included, see @command.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.@command",
    "page": "Client",
    "title": "Discord.@command",
    "category": "macro",
    "text": "@command name=name handler=handler kwargs...\n\nMark a function as a bot command to be collected by add_command! (from a module). Supported keywords are identical to add_command!.\n\nExample\n\nmodule Commands\nusing Discord\necho(c::Client, m::Message, noprefix::AbstractString) = reply(c, m, noprefix)\n@command name=:echo handler=echo help=\"Echo a message\" pattern=r\"^echo (.+)\"\nend\nc = Client(\"token\")\nadd_command!(c, Commands)\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.delete_command!",
    "page": "Client",
    "title": "Discord.delete_command!",
    "category": "function",
    "text": "delete_command!(c::Client, name::Symbol)\n\nDelete a command.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.add_help!",
    "page": "Client",
    "title": "Discord.add_help!",
    "category": "function",
    "text": "add_help!(\n    c::Client;\n    pattern::Regex=r\"^help(?: (.+))?\",\n    help::AbstractString=\"Show this help message\",\n    nohelp::AbstractString=\"No help provided\",\n    nocmd::AbstractString=\"Command not found\",\n)\n\nAdd a help command. This can be called at any time, new commands will be included automatically.\n\nKeywords\n\nseparator::StringOrChar: Separator between commands.\npattern::Regex: The command pattern (see add_command!).\nhelp::AbstractString: Help for the help command.\nnohelp::AbstractString: Help for commands without their own help string.\nnocmd::AbstractString: Help for commands that aren\'t found.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.set_prefix!",
    "page": "Client",
    "title": "Discord.set_prefix!",
    "category": "function",
    "text": "set_prefix!(c::Client, prefix::StringOrChar)\nset_prefix!(c::Client, prefix::StringOrChar, guild::Union{Guild, Integer})\n\nSet Client\'s command prefix. If a Guild or its ID is supplied, then the prefix only applies to that guild.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.Splat",
    "page": "Client",
    "title": "Discord.Splat",
    "category": "type",
    "text": "Splat(func::Base.Callable=identity, split::StringOrChar=\' \') -> Splat\n\nCollect a variable number of arguments from one capture group with a single parser.\n\n\n\n\n\n"
},

{
    "location": "client/#Bot-Commands-1",
    "page": "Client",
    "title": "Bot Commands",
    "category": "section",
    "text": "add_command!\n@command\ndelete_command!\nadd_help!\nset_prefix!\nSplat"
},

{
    "location": "client/#Discord.CacheStrategy",
    "page": "Client",
    "title": "Discord.CacheStrategy",
    "category": "type",
    "text": "A method of handling cache insertion and eviction.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.CacheForever",
    "page": "Client",
    "title": "Discord.CacheForever",
    "category": "type",
    "text": "CacheForever() -> CacheForever\n\nStore everything and never evict items from the cache.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.CacheNever",
    "page": "Client",
    "title": "Discord.CacheNever",
    "category": "type",
    "text": "CacheNever() -> CacheNever\n\nDon\'t store anything in the cache.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.CacheTTL",
    "page": "Client",
    "title": "Discord.CacheTTL",
    "category": "type",
    "text": "CacheTTL(ttl::Period) -> CacheTTL\n\nEvict items from the cache after ttl has elapsed.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.CacheLRU",
    "page": "Client",
    "title": "Discord.CacheLRU",
    "category": "type",
    "text": "CacheLRU(size::Int) -> CacheLRU\n\nEvict the least recently used item from the cache when there are more than size items.\n\n\n\n\n\n"
},

{
    "location": "client/#Discord.CacheFilter",
    "page": "Client",
    "title": "Discord.CacheFilter",
    "category": "type",
    "text": "CacheFilter(f::Function) -> CacheFilter\n\nOnly store value v at key k if f(v) === true (k is always v.id).\n\n\n\n\n\n"
},

{
    "location": "client/#Caching-1",
    "page": "Client",
    "title": "Caching",
    "category": "section",
    "text": "CacheStrategy\nCacheForever\nCacheNever\nCacheTTL\nCacheLRU\nCacheFilter"
},

{
    "location": "events/#",
    "page": "Events",
    "title": "Events",
    "category": "page",
    "text": "CurrentModule = Discord"
},

{
    "location": "events/#Discord.AbstractEvent",
    "page": "Events",
    "title": "Discord.AbstractEvent",
    "category": "type",
    "text": "An incoming event sent over the gateway. Also a catch-all event: Handlers defined on this type will execute on all events.\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.FallbackEvent",
    "page": "Events",
    "title": "Discord.FallbackEvent",
    "category": "type",
    "text": "A type for defining handlers on any events which would otherwise have no non-default handler. Handlers for this type must accept an AbstractEvent.\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.UnknownEvent",
    "page": "Events",
    "title": "Discord.UnknownEvent",
    "category": "type",
    "text": "An unknown event. When an event can\'t be parsed, due to an unknown type or any other error, it will appear as an UnknownEvent. The fields follow the schema defined here.\n\n\n\n\n\n"
},

{
    "location": "events/#Events-1",
    "page": "Events",
    "title": "Events",
    "category": "section",
    "text": "Note that Snowflake === UInt64. Unions with Nothing indicate that a field is nullable, whereas Unions with Missing indicate that a field is optional. More details here.AbstractEvent\nFallbackEvent\nUnknownEvent"
},

{
    "location": "events/#Discord.ChannelCreate",
    "page": "Events",
    "title": "Discord.ChannelCreate",
    "category": "type",
    "text": "Sent when a new DiscordChannel is created.\n\nFields\n\nchannel :: DiscordChannel\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.ChannelUpdate",
    "page": "Events",
    "title": "Discord.ChannelUpdate",
    "category": "type",
    "text": "Sent when a DiscordChannel is updated.\n\nFields\n\nchannel :: DiscordChannel\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.ChannelDelete",
    "page": "Events",
    "title": "Discord.ChannelDelete",
    "category": "type",
    "text": "Sent when a DiscordChannel is deleted.\n\nFields\n\nchannel :: DiscordChannel\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.ChannelPinsUpdate",
    "page": "Events",
    "title": "Discord.ChannelPinsUpdate",
    "category": "type",
    "text": "Sent when a DiscordChannel\'s pins are updated.\n\nFields\n\nchannel_id         :: Snowflake\nlast_pin_timestamp :: Nullable{DateTime}\n\n\n\n\n\n"
},

{
    "location": "events/#Channels-1",
    "page": "Events",
    "title": "Channels",
    "category": "section",
    "text": "ChannelCreate\nChannelUpdate\nChannelDelete\nChannelPinsUpdate"
},

{
    "location": "events/#Discord.GuildCreate",
    "page": "Events",
    "title": "Discord.GuildCreate",
    "category": "type",
    "text": "Sent when a new Guild is created.\n\nFields\n\nguild :: Guild\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildUpdate",
    "page": "Events",
    "title": "Discord.GuildUpdate",
    "category": "type",
    "text": "Sent when a Guild is updated.\n\nFields\n\nguild :: Guild\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildDelete",
    "page": "Events",
    "title": "Discord.GuildDelete",
    "category": "type",
    "text": "Sent when a Guild is deleted.\n\nFields\n\nguild :: AbstractGuild\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildBanAdd",
    "page": "Events",
    "title": "Discord.GuildBanAdd",
    "category": "type",
    "text": "Sent when a User is banned from a Guild.\n\nFields\n\nguild_id :: Snowflake\nuser     :: User\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildBanRemove",
    "page": "Events",
    "title": "Discord.GuildBanRemove",
    "category": "type",
    "text": "Sent when a User is unbanned from a Guild.\n\nFields\n\nguild_id :: Snowflake\nuser     :: User\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildEmojisUpdate",
    "page": "Events",
    "title": "Discord.GuildEmojisUpdate",
    "category": "type",
    "text": "Sent when a Guild has its Emojis updated.\n\nFields\n\nguild_id :: Snowflake\nemojis   :: Vector{Emoji}\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildIntegrationsUpdate",
    "page": "Events",
    "title": "Discord.GuildIntegrationsUpdate",
    "category": "type",
    "text": "Sent when a Guild has its Integrations updated.\n\nFields\n\nguild_id :: Snowflake\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildMemberAdd",
    "page": "Events",
    "title": "Discord.GuildMemberAdd",
    "category": "type",
    "text": "Sent when a Member is added to a Guild.\n\nFields\n\nguild_id :: Snowflake\nmember   :: Member\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildMemberRemove",
    "page": "Events",
    "title": "Discord.GuildMemberRemove",
    "category": "type",
    "text": "Sent when a Member is removed from a Guild.\n\nFields\n\nguild_id :: Snowflake\nuser     :: User\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildMemberUpdate",
    "page": "Events",
    "title": "Discord.GuildMemberUpdate",
    "category": "type",
    "text": "Sent when a Member is updated in a Guild.\n\nFields\n\nguild_id :: Snowflake\nroles    :: Vector{Snowflake}\nuser     :: User\nnick     :: Nullable{String}\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildMembersChunk",
    "page": "Events",
    "title": "Discord.GuildMembersChunk",
    "category": "type",
    "text": "Sent when the Client requests guild members with request_guild_members.\n\nFields\n\nguild_id :: Snowflake\nmembers  :: Vector{Member}\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildRoleCreate",
    "page": "Events",
    "title": "Discord.GuildRoleCreate",
    "category": "type",
    "text": "Sent when a new Role is created in a Guild.\n\nFields\n\nguild_id :: Snowflake\nrole     :: Role\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildRoleUpdate",
    "page": "Events",
    "title": "Discord.GuildRoleUpdate",
    "category": "type",
    "text": "Sent when a Role is updated in a Guild.\n\nFields\n\nguild_id :: Snowflake\nrole     :: Role\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.GuildRoleDelete",
    "page": "Events",
    "title": "Discord.GuildRoleDelete",
    "category": "type",
    "text": "Sent when a Role is deleted from a Guild.\n\nFields\n\nguild_id :: Snowflake\nrole_id  :: Snowflake\n\n\n\n\n\n"
},

{
    "location": "events/#Guilds-1",
    "page": "Events",
    "title": "Guilds",
    "category": "section",
    "text": "GuildCreate\nGuildUpdate\nGuildDelete\nGuildBanAdd\nGuildBanRemove\nGuildEmojisUpdate\nGuildIntegrationsUpdate\nGuildMemberAdd\nGuildMemberRemove\nGuildMemberUpdate\nGuildMembersChunk\nGuildRoleCreate\nGuildRoleUpdate\nGuildRoleDelete"
},

{
    "location": "events/#Discord.MessageCreate",
    "page": "Events",
    "title": "Discord.MessageCreate",
    "category": "type",
    "text": "Sent when a Message is sent.\n\nFields\n\nmessage :: Message\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.MessageUpdate",
    "page": "Events",
    "title": "Discord.MessageUpdate",
    "category": "type",
    "text": "Sent when a Message is updated.\n\nFields\n\nmessage :: Message\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.MessageDelete",
    "page": "Events",
    "title": "Discord.MessageDelete",
    "category": "type",
    "text": "Sent when a Message is deleted.\n\nFields\n\nid         :: Snowflake\nchannel_id :: Snowflake\nguild_id   :: Optional{Snowflake}\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.MessageDeleteBulk",
    "page": "Events",
    "title": "Discord.MessageDeleteBulk",
    "category": "type",
    "text": "Sent when multiple Messages are deleted in bulk.\n\nFields\n\nids        :: Vector{Snowflake}\nchannel_id :: Snowflake\nguild_id   :: Optional{Snowflake}\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.MessageReactionAdd",
    "page": "Events",
    "title": "Discord.MessageReactionAdd",
    "category": "type",
    "text": "Sent when a Reaction is added to a Message.\n\nFields\n\nuser_id    :: Snowflake\nchannel_id :: Snowflake\nmessage_id :: Snowflake\nguild_id   :: Optional{Snowflake}\nemoji      :: Emoji\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.MessageReactionRemove",
    "page": "Events",
    "title": "Discord.MessageReactionRemove",
    "category": "type",
    "text": "Sent when a Reaction is removed from a Message.\n\nFields\n\nuser_id    :: Snowflake\nchannel_id :: Snowflake\nmessage_id :: Snowflake\nguild_id   :: Optional{Snowflake}\nemoji      :: Emoji\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.MessageReactionRemoveAll",
    "page": "Events",
    "title": "Discord.MessageReactionRemoveAll",
    "category": "type",
    "text": "Sent when all Reactions are removed from a Message.\n\nFields\n\nchannel_id :: Snowflake\nmessage_id :: Snowflake\nguild_id   :: Optional{Snowflake}\n\n\n\n\n\n"
},

{
    "location": "events/#Messages-1",
    "page": "Events",
    "title": "Messages",
    "category": "section",
    "text": "MessageCreate\nMessageUpdate\nMessageDelete\nMessageDeleteBulk\nMessageReactionAdd\nMessageReactionRemove\nMessageReactionRemoveAll"
},

{
    "location": "events/#Discord.PresenceUpdate",
    "page": "Events",
    "title": "Discord.PresenceUpdate",
    "category": "type",
    "text": "Sent when a User\'s Presence is updated.\n\nFields\n\npresence :: Presence\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.TypingStart",
    "page": "Events",
    "title": "Discord.TypingStart",
    "category": "type",
    "text": "Sent when a User begins typing.\n\nFields\n\nchannel_id :: Snowflake\nguild_id   :: Optional{Snowflake}\nuser_id    :: Snowflake\ntimestamp  :: DateTime\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.UserUpdate",
    "page": "Events",
    "title": "Discord.UserUpdate",
    "category": "type",
    "text": "Sent when a User\'s details are updated.\n\nFields\n\nuser :: User\n\n\n\n\n\n"
},

{
    "location": "events/#Presence-1",
    "page": "Events",
    "title": "Presence",
    "category": "section",
    "text": "PresenceUpdate\nTypingStart\nUserUpdate"
},

{
    "location": "events/#Discord.VoiceStateUpdate",
    "page": "Events",
    "title": "Discord.VoiceStateUpdate",
    "category": "type",
    "text": "Sent when a User updates their VoiceState.\n\nFields\n\nstate :: VoiceState\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.VoiceServerUpdate",
    "page": "Events",
    "title": "Discord.VoiceServerUpdate",
    "category": "type",
    "text": "Sent when a Guild\'s voice server is updated.\n\nFields\n\ntoken    :: String\nguild_id :: Snowflake\nendpoint :: String\n\n\n\n\n\n"
},

{
    "location": "events/#Voice-1",
    "page": "Events",
    "title": "Voice",
    "category": "section",
    "text": "VoiceStateUpdate\nVoiceServerUpdate"
},

{
    "location": "events/#Discord.WebhooksUpdate",
    "page": "Events",
    "title": "Discord.WebhooksUpdate",
    "category": "type",
    "text": "Sent when a DiscordChannel\'s Webhooks are updated.\n\nFields\n\nguild_id   :: Snowflake\nchannel_id :: Snowflake\n\n\n\n\n\n"
},

{
    "location": "events/#Webhooks-1",
    "page": "Events",
    "title": "Webhooks",
    "category": "section",
    "text": "WebhooksUpdate"
},

{
    "location": "events/#Discord.Ready",
    "page": "Events",
    "title": "Discord.Ready",
    "category": "type",
    "text": "Sent when the Client has authenticated, and contains the initial state.\n\nFields\n\nv                :: Int\nuser             :: User\nprivate_channels :: Vector{DiscordChannel}\nguilds           :: Vector{UnavailableGuild}\nsession_id       :: String\n_trace           :: Vector{String}\n\n\n\n\n\n"
},

{
    "location": "events/#Discord.Resumed",
    "page": "Events",
    "title": "Discord.Resumed",
    "category": "type",
    "text": "Sent when a Client resumes its connection.\n\nFields\n\n_trace :: Vector{String}\n\n\n\n\n\n"
},

{
    "location": "events/#Connecting-1",
    "page": "Events",
    "title": "Connecting",
    "category": "section",
    "text": "Ready\nResumed"
},

{
    "location": "rest/#",
    "page": "REST API",
    "title": "REST API",
    "category": "page",
    "text": "CurrentModule = Discord"
},

{
    "location": "rest/#REST-API-1",
    "page": "REST API",
    "title": "REST API",
    "category": "section",
    "text": ""
},

{
    "location": "rest/#Discord.Response",
    "page": "REST API",
    "title": "Discord.Response",
    "category": "type",
    "text": "A wrapper around a response from the REST API. Every function which wraps a Discord REST API endpoint returns a Future which will contain a value of this type. To retrieve the Response from the Future, use fetch. See also: fetchval.\n\nFields\n\nval::Nullable{T}: The object contained in the HTTP response. For example, for a call to get_channel_message, this value will be a Message.\nok::Bool: The state of the request. If true, then it is safe to access val.\nhttp_response::Nullable{HTTP.Messages.Response}: The underlying HTTP response, if a request was made.\nexception::Nullable{Exception}: The caught exception, if one is thrown.\n\nExamples\n\nMultiple API calls which immediately return Futures and can be awaited:\n\nfutures = map(i -> create_message(c, channel_id; content=string(i)), 1:10);\nother_work_here()\nresps = fetch.(futures)\n\nSkipping error checks and returning the value directly:\n\nguild = fetchval(create_guild(c; name=\"foo\"))\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.fetchval",
    "page": "REST API",
    "title": "Discord.fetchval",
    "category": "function",
    "text": "fetchval(f::Future{Response{T}}) -> Nullable{T}\n\nShortcut for fetch(f).val: Fetch a Response and return its value. Note that there are no guarantees about the response\'s success and the value being returned, and it discards context that can be useful for debugging, such as HTTP responses and caught exceptions.\n\n\n\n\n\n"
},

{
    "location": "rest/#Response-1",
    "page": "REST API",
    "title": "Response",
    "category": "section",
    "text": "Response\nfetchval"
},

{
    "location": "rest/#Discord.create",
    "page": "REST API",
    "title": "Discord.create",
    "category": "function",
    "text": "create(c::Client, ::Type{T}, args...; kwargs...) -> Future{Response}\n\nCreate, add, send, etc.\n\nExamples\n\nSending a Message:\n\ncreate(c, Message, channel; content=\"foo\")\n\nCreating a new DiscordChannel:\n\ncreate(c, DiscordChannel, guild; name=\"bar\")\n\nBanning a Member:\n\ncreate(c, Ban, guild, member; reason=\"baz\")\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.retrieve",
    "page": "REST API",
    "title": "Discord.retrieve",
    "category": "function",
    "text": "retrieve(c::Client, ::Type{T}, args...; kwargs...) -> Future{Response}\n\nRetrieve, get, list, etc.\n\nExamples\n\nGetting the Client\'s User:\n\nretrieve(c, User)\n\nGetting a Guild\'s DiscordChannels:\n\nretrieve(c, DiscordChannel, guild)\n\nGetting an Invite to a Guild by code:\n\nretrieve(c, Invite, \"abcdef\")\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.update",
    "page": "REST API",
    "title": "Discord.update",
    "category": "function",
    "text": "update(c::Client, x::T, args...; kwargs...) -> Future{Response}\n\nUpdate, edit, modify, etc.\n\nExamples\n\nEditing a Message:\n\nupdate(c, message; content=\"foo2\")\n\nModifying a Webhook:\n\nupdate(c, webhook; name=\"bar2\")\n\nUpdating a Role:\n\nupdate(c, role, guild; permissions=8)\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete",
    "page": "REST API",
    "title": "Discord.delete",
    "category": "function",
    "text": "delete(c::Client, x::T, args...) -> Future{Response}\n\nDelete, remove, discard, etc.\n\nExamples\n\nKicking a Member:\n\ndelete(c, member)\n\nUnbanning a Member:\n\ndelete(c, ban, guild)\n\nDeleting all Reactions from a Message (note: this is the only update/delete method which takes a type parameter):\n\ndelete(c, Reaction, message)\n\n\n\n\n\n"
},

{
    "location": "rest/#CRUD-API-1",
    "page": "REST API",
    "title": "CRUD API",
    "category": "section",
    "text": "On top of functions for accessing individual endpoints such as get_channel_messages, Discord.jl also offers a unified API with just four functions. Named after the CRUD model, they cover most of the Discord REST API and allow you to write concise, expressive code, and forget about the subtleties of endpoint naming. The argument ordering convention is roughly as follows:A Client, always.\nFor cases when we don\'t yet have the entity to be manipulated (usually create and retrieve), the entity\'s type. If we do have the entity (update and delete), the entity itself.\nThe remaining positional arguments supply whatever context is needed to specify the entity. For example, sending a message requires a DiscordChannel parameter.\nKeyword arguments follow (usually for create and update).create\nretrieve\nupdate\ndeleteThe full list of types available to be manipulated is:AuditLog\nBan\nDiscordChannel\nEmoji\nGuildEmbed\nGuild\nIntegration\nInvite\nMember\nMessage\nOverwrite\nReaction\nRole\nUser\nVoiceRegion\nWebhook"
},

{
    "location": "rest/#Endpoints-1",
    "page": "REST API",
    "title": "Endpoints",
    "category": "section",
    "text": "Functions which wrap REST API endpoints are named and sorted according to the Discord API documentation. When a function accepts keyword arguments, the docstring will include a link to the Discord documentation which indicates the expected keys and values. Remember that the return types annotated below are not the actual return types, but the types of Response that the returned Futures will yield."
},

{
    "location": "rest/#Discord.get_guild_audit_log",
    "page": "REST API",
    "title": "Discord.get_guild_audit_log",
    "category": "function",
    "text": "get_guild_audit_log(c::Client, guild::Integer; kwargs...) -> AuditLog\n\nGet a Guild\'s AuditLog. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Audit-Log-1",
    "page": "REST API",
    "title": "Audit Log",
    "category": "section",
    "text": "get_guild_audit_log"
},

{
    "location": "rest/#Discord.get_channel",
    "page": "REST API",
    "title": "Discord.get_channel",
    "category": "function",
    "text": "get_channel(c::Client, channel::Integer) -> DiscordChannel\n\nGet a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_channel",
    "page": "REST API",
    "title": "Discord.modify_channel",
    "category": "function",
    "text": "modify_channel(c::Client, channel::Integer; kwargs...) -> DiscordChannel\n\nModify a DiscordChannel. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_channel",
    "page": "REST API",
    "title": "Discord.delete_channel",
    "category": "function",
    "text": "delete_channel(c::Client, channel::Integer) -> DiscordChannel\n\nDelete a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_channel_messages",
    "page": "REST API",
    "title": "Discord.get_channel_messages",
    "category": "function",
    "text": "get_channel_messages(c::Client, channel::Integer; kwargs...) -> Vector{Message}\n\nGet a list of Messages from a DiscordChannel. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_channel_message",
    "page": "REST API",
    "title": "Discord.get_channel_message",
    "category": "function",
    "text": "get_channel_message(c::Client, channel::Integer, message::Integer) -> Message\n\nGet a Message from a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_message",
    "page": "REST API",
    "title": "Discord.create_message",
    "category": "function",
    "text": "create_message(c::Client, channel::Integer; kwargs...) -> Message\n\nSend a Message to a DiscordChannel. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_reaction",
    "page": "REST API",
    "title": "Discord.create_reaction",
    "category": "function",
    "text": "create_reaction(c::Client, channel::Integer, message::Integer, emoji::StringOrChar)\n\nReact to a Message. If emoji is a custom Emoji, it should be formatted \"name:id\".\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_own_reaction",
    "page": "REST API",
    "title": "Discord.delete_own_reaction",
    "category": "function",
    "text": "delete_own_reaction(c::Client, channel::Integer, message::Integer, emoji::StringOrChar)\n\nDelete the Client user\'s reaction to a Message.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_user_reaction",
    "page": "REST API",
    "title": "Discord.delete_user_reaction",
    "category": "function",
    "text": "delete_user_reaction(\n    c::Client,\n    channel::Integer,\n    message::Integer,\n    emoji::StringOrChar,\n    user::Integer,\n)\n\nDelete a User\'s reaction to a Message.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_reactions",
    "page": "REST API",
    "title": "Discord.get_reactions",
    "category": "function",
    "text": "get_reactions(\n    c::Client,\n    channel::Integer,\n    message::Integer,\n    emoji::StringOrChar,\n) -> Vector{User}\n\nGet the Users who reacted to a Message with an Emoji.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_all_reactions",
    "page": "REST API",
    "title": "Discord.delete_all_reactions",
    "category": "function",
    "text": "delete_all_reactions(c::Client, channel::Integer, message::Integer)\n\nDelete all reactions from a Message.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.edit_message",
    "page": "REST API",
    "title": "Discord.edit_message",
    "category": "function",
    "text": "edit_message(c::Client, channel::Integer, message::Integer; kwargs...) -> Message\n\nEdit a Message. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_message",
    "page": "REST API",
    "title": "Discord.delete_message",
    "category": "function",
    "text": "delete_message(c::Client, channel::Integer, message::Integer)\n\nDelete a Message.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.bulk_delete_messages",
    "page": "REST API",
    "title": "Discord.bulk_delete_messages",
    "category": "function",
    "text": "bulk_delete_messages(c::Client, channel::Integer; kwargs...)\n\nDelete multiple Messages. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.edit_channel_permissions",
    "page": "REST API",
    "title": "Discord.edit_channel_permissions",
    "category": "function",
    "text": "edit_channel_permissions(\n    c::Client,\n    channel::Integer,\n    overwrite::Integer;\n    kwargs...,\n)\n\nEdit permissions for a DiscordChannel. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_channel_invites",
    "page": "REST API",
    "title": "Discord.get_channel_invites",
    "category": "function",
    "text": "get_channel_invites(c::Client, channel::Integer) -> Vector{Invite}\n\nGet the Invites for a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_channel_invite",
    "page": "REST API",
    "title": "Discord.create_channel_invite",
    "category": "function",
    "text": "create_channel_invite(c::Client, channel::Integer; kwargs...) -> Invite\n\nCreate an Invite to a DiscordChannel. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_channel_permission",
    "page": "REST API",
    "title": "Discord.delete_channel_permission",
    "category": "function",
    "text": "delete_channel_permission(c::Client, channel::Integer, overwrite::Integer)\n\nDelete an Overwrite from a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.trigger_typing_indicator",
    "page": "REST API",
    "title": "Discord.trigger_typing_indicator",
    "category": "function",
    "text": "trigger_typing_indicator(c::Client, channel::Integer)\n\nTrigger the typing indicator in a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_pinned_messages",
    "page": "REST API",
    "title": "Discord.get_pinned_messages",
    "category": "function",
    "text": "get_pinned_messages(c::Client, channel::Integer) -> Vector{Message}\n\nGet the pinned Messages in a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.add_pinned_channel_message",
    "page": "REST API",
    "title": "Discord.add_pinned_channel_message",
    "category": "function",
    "text": "add_pinned_channel_message(c::Client, channel::Integer, message::Integer)\n\nPin a Message in a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_pinned_channel_message",
    "page": "REST API",
    "title": "Discord.delete_pinned_channel_message",
    "category": "function",
    "text": "delete_pinned_channel_message(c::Client, channel::Integer, message::Integer)\n\nUnpin a Message from a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Channel-1",
    "page": "REST API",
    "title": "Channel",
    "category": "section",
    "text": "get_channel\nmodify_channel\ndelete_channel\nget_channel_messages\nget_channel_message\ncreate_message\ncreate_reaction\ndelete_own_reaction\ndelete_user_reaction\nget_reactions\ndelete_all_reactions\nedit_message\ndelete_message\nbulk_delete_messages\nedit_channel_permissions\nget_channel_invites\ncreate_channel_invite\ndelete_channel_permission\ntrigger_typing_indicator\nget_pinned_messages\nadd_pinned_channel_message\ndelete_pinned_channel_message"
},

{
    "location": "rest/#Discord.list_guild_emojis",
    "page": "REST API",
    "title": "Discord.list_guild_emojis",
    "category": "function",
    "text": "list_guild_emojis(c::Client, guild::Integer) -> Vector{Emoji}\n\nGet the Emojis in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_emoji",
    "page": "REST API",
    "title": "Discord.get_guild_emoji",
    "category": "function",
    "text": "get_guild_emoji(c::Client, guild::Integer, emoji::Integer) -> Emoji\n\nGet an Emoji in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_guild_emoji",
    "page": "REST API",
    "title": "Discord.create_guild_emoji",
    "category": "function",
    "text": "create_guild_emoji(c::Client, guild::Integer; kwargs...) -> Emoji\n\nCreate an Emoji in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild_emoji",
    "page": "REST API",
    "title": "Discord.modify_guild_emoji",
    "category": "function",
    "text": "modify_guild_emoji(c::Client, guild::Integer, emoji::Integer; kwargs...) -> Emoji\n\nEdit an Emoji in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_guild_emoji",
    "page": "REST API",
    "title": "Discord.delete_guild_emoji",
    "category": "function",
    "text": "delete_guild_emoji(c::Client, guild::Integer, emoji::Integer)\n\nDelete an Emoji from a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Emoji-1",
    "page": "REST API",
    "title": "Emoji",
    "category": "section",
    "text": "list_guild_emojis\nget_guild_emoji\ncreate_guild_emoji\nmodify_guild_emoji\ndelete_guild_emoji"
},

{
    "location": "rest/#Discord.create_guild",
    "page": "REST API",
    "title": "Discord.create_guild",
    "category": "function",
    "text": "create_guild(c::Client; kwargs...) -> Guild\n\nCreate a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild",
    "page": "REST API",
    "title": "Discord.get_guild",
    "category": "function",
    "text": "get_guild(c::Client, guild::Integer) -> Guild\n\nGet a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild",
    "page": "REST API",
    "title": "Discord.modify_guild",
    "category": "function",
    "text": "modify_guild(c::Client, guild::Integer; kwargs...) -> Guild\n\nEdit a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_guild",
    "page": "REST API",
    "title": "Discord.delete_guild",
    "category": "function",
    "text": "delete_guild(c::Client, guild::Integer)\n\nDelete a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_channels",
    "page": "REST API",
    "title": "Discord.get_guild_channels",
    "category": "function",
    "text": "get_guild_channels(c::Client, guild::Integer) -> Vector{DiscordChannel}\n\nGet the DiscordChannels in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_guild_channel",
    "page": "REST API",
    "title": "Discord.create_guild_channel",
    "category": "function",
    "text": "create_guild_channel(c::Client, guild::Integer; kwargs...) -> DiscordChannel\n\nCreate a DiscordChannel in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild_channel_positions",
    "page": "REST API",
    "title": "Discord.modify_guild_channel_positions",
    "category": "function",
    "text": "modify_guild_channel_positions(c::Client, guild::Integer, positions...)\n\nModify the positions of DiscordChannels in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_member",
    "page": "REST API",
    "title": "Discord.get_guild_member",
    "category": "function",
    "text": "get_guild_member(c::Client, guild::Integer, user::Integer) -> Member\n\nGet a Member in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.list_guild_members",
    "page": "REST API",
    "title": "Discord.list_guild_members",
    "category": "function",
    "text": "list_guild_members(c::Client, guild::Integer; kwargs...) -> Vector{Member}\n\nGet a list of Members in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.add_guild_member",
    "page": "REST API",
    "title": "Discord.add_guild_member",
    "category": "function",
    "text": "add_guild_member(c::Client; kwargs...) -> Member\n\nAdd a User to a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild_member",
    "page": "REST API",
    "title": "Discord.modify_guild_member",
    "category": "function",
    "text": "modify_guild__member(c::Client, guild::Integer, user::Integer; kwargs...)\n\nModify a Member in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_current_user_nick",
    "page": "REST API",
    "title": "Discord.modify_current_user_nick",
    "category": "function",
    "text": "modify_current_user_nick(c::Client, guild::Intger; kwargs...) -> String\n\nModify the Client user\'s nickname in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.add_guild_member_role",
    "page": "REST API",
    "title": "Discord.add_guild_member_role",
    "category": "function",
    "text": "add_guild_member_role(c::Client, guild::Integer, user::Integer, role::Integer)\n\nAdd a Role to a Member.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.remove_guild_member_role",
    "page": "REST API",
    "title": "Discord.remove_guild_member_role",
    "category": "function",
    "text": "remove_guild_member_role(c::Client, guild::Integer, user::Integer, role::Integer)\n\nRemove a Role from a Member.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.remove_guild_member",
    "page": "REST API",
    "title": "Discord.remove_guild_member",
    "category": "function",
    "text": "remove_guild_member(c::Client, guild::Integer, user::Integer)\n\nKick a Member from a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_bans",
    "page": "REST API",
    "title": "Discord.get_guild_bans",
    "category": "function",
    "text": "get_guild_bans(c::Client, guild::Integer) -> Vector{Ban}\n\nGet a list of Bans in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_ban",
    "page": "REST API",
    "title": "Discord.get_guild_ban",
    "category": "function",
    "text": "get_ban(c::Client, guild::Integer,  user::Integer) -> Ban\n\nGet a Ban in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_guild_ban",
    "page": "REST API",
    "title": "Discord.create_guild_ban",
    "category": "function",
    "text": "create_guild_ban(c::Client, guild::Integer, user::Integer; kwargs...)\n\nBan a Member from a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.remove_guild_ban",
    "page": "REST API",
    "title": "Discord.remove_guild_ban",
    "category": "function",
    "text": "remove_guild_ban(c::Client, guild::Integer, user::Integer)\n\nUnban a User from a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_roles",
    "page": "REST API",
    "title": "Discord.get_guild_roles",
    "category": "function",
    "text": "get_guild_roles(c::Client, guild::Integer) -> Vector{Role}\n\nGet a Guild\'s Roles.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_guild_role",
    "page": "REST API",
    "title": "Discord.create_guild_role",
    "category": "function",
    "text": "create_guild_role(c::Client, guild::Integer; kwargs) -> Role\n\nCreate a Role in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild_role_positions",
    "page": "REST API",
    "title": "Discord.modify_guild_role_positions",
    "category": "function",
    "text": "modify_guild_role_positions(c::Client, guild::Integer, positions...) -> Vector{Role}\n\nModify the positions of Roles in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild_role",
    "page": "REST API",
    "title": "Discord.modify_guild_role",
    "category": "function",
    "text": "modify_guild_role(c::Client, guild::Integer, role::Integer; kwargs) -> Role\n\nModify a Role in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_guild_role",
    "page": "REST API",
    "title": "Discord.delete_guild_role",
    "category": "function",
    "text": "delete_guild_role(c::Client, guild::Integer, role::Integer)\n\nDelete a Role from a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_prune_count",
    "page": "REST API",
    "title": "Discord.get_guild_prune_count",
    "category": "function",
    "text": "get_guild_prune_count(c::Client, guild::Integer; kwargs...) -> Dict\n\nGet the number of Members that would be removed from a Guild in a prune. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.begin_guild_prune",
    "page": "REST API",
    "title": "Discord.begin_guild_prune",
    "category": "function",
    "text": "begin_guild_prune(c::Client, guild::Integer; kwargs...) -> Dict\n\nBegin pruning Members from a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_voice_regions",
    "page": "REST API",
    "title": "Discord.get_guild_voice_regions",
    "category": "function",
    "text": "get_guild_voice_regions(c::Client, guild::Integer) -> Vector{VoiceRegion}\n\nGet a list of VoiceRegions for the Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_invites",
    "page": "REST API",
    "title": "Discord.get_guild_invites",
    "category": "function",
    "text": "get_guild_invites(c::Client, guild::Integer) -> Vector{Invite}\n\nGet a list of Invites to a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_integrations",
    "page": "REST API",
    "title": "Discord.get_guild_integrations",
    "category": "function",
    "text": "get_guild_integrations(c::Client, guild::Integer) -> Vector{Integration}\n\nGet a list of Integrations for a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_guild_integration",
    "page": "REST API",
    "title": "Discord.create_guild_integration",
    "category": "function",
    "text": "create_guild_integration(c::Client, guild::Integer; kwargs...)\n\nCreate/attach an Integration to a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild_integration",
    "page": "REST API",
    "title": "Discord.modify_guild_integration",
    "category": "function",
    "text": "modify_guild_integration(c::Client, guild::Integer, integration::Integer; kwargs...)\n\nModify an Integration in a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_guild_integration",
    "page": "REST API",
    "title": "Discord.delete_guild_integration",
    "category": "function",
    "text": "delete_guild_integration(c::Client, guild::Integer, integration::Integer)\n\nDelete an Integration from a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.sync_guild_integration",
    "page": "REST API",
    "title": "Discord.sync_guild_integration",
    "category": "function",
    "text": "sync_guild_integration(c::Client, guild::Integer, integration::Integer)\n\nSync an Integration in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_embed",
    "page": "REST API",
    "title": "Discord.get_guild_embed",
    "category": "function",
    "text": "get_guild_embed(c::Client, guild::Integer) -> GuildEmbed\n\nGet a Guild\'s GuildEmbed.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_guild_embed",
    "page": "REST API",
    "title": "Discord.modify_guild_embed",
    "category": "function",
    "text": "modify_guild_embed(c::Client, guild::Integer; kwargs...) -> GuildEmbed\n\nModify a Guild\'s GuildEmbed. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_vanity_url",
    "page": "REST API",
    "title": "Discord.get_vanity_url",
    "category": "function",
    "text": "get_vanity_url(c::Client, guild::Integer) -> Invite\n\nGet a Guild\'s vanity URL, if it supports that feature.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_widget_image",
    "page": "REST API",
    "title": "Discord.get_guild_widget_image",
    "category": "function",
    "text": "get_guild_widget_image(c::Client, guild::Integer; kwargs...) -> Vector{UInt8}\n\nGet a Guild\'s widget image in PNG format. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Guild-1",
    "page": "REST API",
    "title": "Guild",
    "category": "section",
    "text": "create_guild\nget_guild\nmodify_guild\ndelete_guild\nget_guild_channels\ncreate_guild_channel\nmodify_guild_channel_positions\nget_guild_member\nlist_guild_members\nadd_guild_member\nmodify_guild_member\nmodify_current_user_nick\nadd_guild_member_role\nremove_guild_member_role\nremove_guild_member\nget_guild_bans\nget_guild_ban\ncreate_guild_ban\nremove_guild_ban\nget_guild_roles\ncreate_guild_role\nmodify_guild_role_positions\nmodify_guild_role\ndelete_guild_role\nget_guild_prune_count\nbegin_guild_prune\nget_guild_voice_regions\nget_guild_invites\nget_guild_integrations\ncreate_guild_integration\nmodify_guild_integration\ndelete_guild_integration\nsync_guild_integration\nget_guild_embed\nmodify_guild_embed\nget_vanity_url\nget_guild_widget_image"
},

{
    "location": "rest/#Discord.get_invite",
    "page": "REST API",
    "title": "Discord.get_invite",
    "category": "function",
    "text": "get_invite(c::Client, invite::AbstractString; kwargs...} -> Invite\n\nGet an Invite to a Guild. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_invite",
    "page": "REST API",
    "title": "Discord.delete_invite",
    "category": "function",
    "text": "delete_invite(c::Client, invite::AbstractString) -> Invite\n\nDelete an Invite to a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Invite-1",
    "page": "REST API",
    "title": "Invite",
    "category": "section",
    "text": "get_invite\ndelete_invite"
},

{
    "location": "rest/#Discord.get_current_user",
    "page": "REST API",
    "title": "Discord.get_current_user",
    "category": "function",
    "text": "get_current_user(c::Client) -> User\n\nGet the Client User.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_user",
    "page": "REST API",
    "title": "Discord.get_user",
    "category": "function",
    "text": "get_user(c::Client, user::Integer) -> User\n\nGet a User.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_current_user",
    "page": "REST API",
    "title": "Discord.modify_current_user",
    "category": "function",
    "text": "modify_current_user(c::Client; kwargs...) -> User\n\nModify the Client User. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_current_user_guilds",
    "page": "REST API",
    "title": "Discord.get_current_user_guilds",
    "category": "function",
    "text": "get_user_guilds(c::Client; kwargs...) -> Vector{Guild}\n\nGet a list of Guilds the Client User is a member of. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.leave_guild",
    "page": "REST API",
    "title": "Discord.leave_guild",
    "category": "function",
    "text": "leave_guild(c::Client, guild::Integer)\n\nLeave a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.create_dm",
    "page": "REST API",
    "title": "Discord.create_dm",
    "category": "function",
    "text": "create_dm(c::Client; kwargs...) -> DiscordChannel\n\nCreate a DM DiscordChannel. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#User-1",
    "page": "REST API",
    "title": "User",
    "category": "section",
    "text": "get_current_user\nget_user\nmodify_current_user\nget_current_user_guilds\nleave_guild\ncreate_dm"
},

{
    "location": "rest/#Discord.list_voice_regions",
    "page": "REST API",
    "title": "Discord.list_voice_regions",
    "category": "function",
    "text": "list_voice_regions(c::Client) -> Vector{VoiceRegion}\n\nGet a list of the VoiceRegions that can be used when creating Guilds.\n\n\n\n\n\n"
},

{
    "location": "rest/#Voice-1",
    "page": "REST API",
    "title": "Voice",
    "category": "section",
    "text": "list_voice_regions"
},

{
    "location": "rest/#Discord.create_webhook",
    "page": "REST API",
    "title": "Discord.create_webhook",
    "category": "function",
    "text": "create_webhook(c::Client, channel::Integer; kwargs...) -> Webhook\n\nCreate a Webhook in a DiscordChannel. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_channel_webhooks",
    "page": "REST API",
    "title": "Discord.get_channel_webhooks",
    "category": "function",
    "text": "get_channel_webhooks(c::Client, channel::Integer) -> Vector{Webhook}\n\nGet a list of Webhooks in a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_guild_webhooks",
    "page": "REST API",
    "title": "Discord.get_guild_webhooks",
    "category": "function",
    "text": "get_guild_webhooks(c::Client, guild::Integer) -> Vector{Webhook}\n\nGet a list of Webhooks in a Guild.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_webhook",
    "page": "REST API",
    "title": "Discord.get_webhook",
    "category": "function",
    "text": "get_webhook(c::Client, webhook::Integer) -> Webhook\n\nGet a Webhook.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.get_webhook_with_token",
    "page": "REST API",
    "title": "Discord.get_webhook_with_token",
    "category": "function",
    "text": "get_webhook_with_token(c::Client, webhook::Integer, token::AbstractString) -> Webhook\n\nGet a Webhook with a token.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_webhook",
    "page": "REST API",
    "title": "Discord.modify_webhook",
    "category": "function",
    "text": "modify_webhook(c::Client, webhook::Integer; kwargs...) -> Webhook\n\nModify a Webhook. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.modify_webhook_with_token",
    "page": "REST API",
    "title": "Discord.modify_webhook_with_token",
    "category": "function",
    "text": "modify_webhook_with_token(\n    c::Client,\n    webhook::Integer,\n    token::AbstractString;\n    kwargs...,\n) -> Webhook\n\nModify a Webhook with a token. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_webhook",
    "page": "REST API",
    "title": "Discord.delete_webhook",
    "category": "function",
    "text": "delete_webhook(c::Client, webhook::Integer)\n\nDelete a Webhook.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.delete_webhook_with_token",
    "page": "REST API",
    "title": "Discord.delete_webhook_with_token",
    "category": "function",
    "text": "delete_webhook_with_token(c::Client, webhook::Integer, token::AbstractString)\n\nDelete a Webhook with a token.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.execute_webhook",
    "page": "REST API",
    "title": "Discord.execute_webhook",
    "category": "function",
    "text": "execute_webhook(\n    c::Client,\n    webhook::Integer,\n    token::AbstractString;\n    wait::Bool=false,\n    kwargs...,\n) -> Message\n\nExecute a Webhook. If wait is not set, no Message is returned. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.execute_slack_compatible_webhook",
    "page": "REST API",
    "title": "Discord.execute_slack_compatible_webhook",
    "category": "function",
    "text": "execute_slack_compatible_webhook(\n    c::Client,\n    webhook::Integer,\n    token::AbstractString;\n    wait::Bool=true,\n    kwargs...,\n)\n\nExecute a Slack Webhook. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Discord.execute_github_compatible_webhook",
    "page": "REST API",
    "title": "Discord.execute_github_compatible_webhook",
    "category": "function",
    "text": "execute_github_compatible_webhook(\n    c::Client,\n    webhook::Integer,\n    token::AbstractString;\n    wait::Bool=true,\n    kwargs...,\n)\n\nExecute a Github Webhook. More details here.\n\n\n\n\n\n"
},

{
    "location": "rest/#Webhook-1",
    "page": "REST API",
    "title": "Webhook",
    "category": "section",
    "text": "create_webhook\nget_channel_webhooks\nget_guild_webhooks\nget_webhook\nget_webhook_with_token\nmodify_webhook\nmodify_webhook_with_token\ndelete_webhook\ndelete_webhook_with_token\nexecute_webhook\nexecute_slack_compatible_webhook\nexecute_github_compatible_webhook"
},

{
    "location": "helpers/#",
    "page": "Helpers",
    "title": "Helpers",
    "category": "page",
    "text": "CurrentModule = Discord"
},

{
    "location": "helpers/#Discord.Permission",
    "page": "Helpers",
    "title": "Discord.Permission",
    "category": "type",
    "text": "Bitwise permission flags. More details here.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.has_permission",
    "page": "Helpers",
    "title": "Discord.has_permission",
    "category": "function",
    "text": "has_permission(perms::Integer, perm::Permission) -> Bool\n\nDetermine whether a bitwise OR of permissions contains one Permission.\n\nExample\n\njulia> has_permission(0x0420, PERM_VIEW_CHANNEL)\ntrue\n\njulia> has_permission(0x0420, PERM_ADMINISTRATOR)\nfalse\n\njulia> has_permission(0x0008, PERM_MANAGE_ROLES)\ntrue\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.permissions_in",
    "page": "Helpers",
    "title": "Discord.permissions_in",
    "category": "function",
    "text": "permissions_in(m::Member, g::Guild, ch::DiscordChannel) -> Int\n\nCompute a Member\'s Permissions in a DiscordChannel.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.reply",
    "page": "Helpers",
    "title": "Discord.reply",
    "category": "function",
    "text": "reply(\n    c::Client,\n    m::Message,\n    content::Union{AbstractString, AbstractDict, NamedTuple, Embed};\n    at::Bool=false,\n) -> Future{Response}\n\nReply (send a message to the same DiscordChannel) to a Message. If at is set, then the message is prefixed with the sender\'s mention.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.split_message",
    "page": "Helpers",
    "title": "Discord.split_message",
    "category": "function",
    "text": "split_message(text::AbstractString) -> Vector{String}\n\nSplit a message into 2000-character chunks, preserving formatting.\n\nExamples\n\n```jldoctest; setup=:(using Discord) julia> split_message(\"foo\") 1-element Array{String,1}:  \"foo\"\n\njulia> split_message(repeat(\'.\', 1995) * \"hello, world\")[2] \"hello, world\"\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.plaintext",
    "page": "Helpers",
    "title": "Discord.plaintext",
    "category": "function",
    "text": "plaintext(m::Message) -> String\nplaintext(c::Client, m::Message) -> String\n\nGet the Message contents with any User mentions replaced with their plaintext. If a Client is provided, DiscordChannels Role are also replaced. However, only channels and roles stored in state are replaced; no API requests are made.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.upload_file",
    "page": "Helpers",
    "title": "Discord.upload_file",
    "category": "function",
    "text": "upload_file(c::Client, ch::DiscordChannel, path::AbstractString; kwargs...) -> Message\n\nSend a Message with a file Attachment. Any keywords are passed on to create_message.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.set_game",
    "page": "Helpers",
    "title": "Discord.set_game",
    "category": "function",
    "text": "set_game(\n    c::Client,\n    game::AbstractString;\n    type::Union{ActivityType, Int}=AT_GAME,\n    since::Nullable{Int}=c.presence[\"since\"],\n    status::Union{PresenceStatus, AbstractString}=c.presence[\"status\"],\n    afk::Bool=c.presence[\"afk\"],\n    kwargs...,\n) -> Bool\n\nShortcut for update_status to set the Client\'s Activity. Any additional keywords are passed into the activity section.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.@fetch",
    "page": "Helpers",
    "title": "Discord.@fetch",
    "category": "macro",
    "text": "@fetch [functions...] block\n\nWrap all calls to the specified CRUD functions (create, retrieve, update, and delete) with fetch inside a block. If no functions are specified, all CRUD functions are wrapped.\n\nExamples\n\nWrapping all CRUD functions:\n\n@fetch begin\n    guild_resp = create(c, Guild; name=\"foo\")\n    guild_resp.ok || error(\"Request for new guild failed\")\n    channel_resp = retrieve(c, DiscordChannel, guild_resp.val)\nend\n\nWrapping only calls to retrieve:\n\n@fetch retrieve begin\n    resp = retrieve(c, DiscordChannel, 123)\n    future = create(c, Message, resp.val; content=\"foo\")  # Behaves normally.\nend\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.@fetchval",
    "page": "Helpers",
    "title": "Discord.@fetchval",
    "category": "macro",
    "text": "@fetchval [functions...] block\n\nIdentical to @fetch, but calls are wrapped with fetchval instead.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.@deferred_fetch",
    "page": "Helpers",
    "title": "Discord.@deferred_fetch",
    "category": "macro",
    "text": "@deferred_fetch [functions...] block\n\nIdentical to @fetch, but Futures are not fetched until the end of the block. This is more efficient, but only works when there are no data dependencies in the block.\n\nExamples\n\nThis will work:\n\n@deferred_fetch begin\n    guild_resp = create(c, Guild; name=\"foo\")\n    channel_resp = retrieve(c, DiscordChannel, 123)\nend\n\nThis will not, because the second call is dependent on the first value:\n\n@deferred_fetch begin\n    guild_resp = create(c, Guild; name=\"foo\")\n    channels_resp = retrieve(c, DiscordChannel, guild_resp.val)\nend\n\n\n\n\n\n"
},

{
    "location": "helpers/#Discord.@deferred_fetchval",
    "page": "Helpers",
    "title": "Discord.@deferred_fetchval",
    "category": "macro",
    "text": "@deferred_fetchval [functions...] block\n\nIdentical to @deferred_fetch, but Futures have fetchval called on them instead of fetch.\n\n\n\n\n\n"
},

{
    "location": "helpers/#Helpers-1",
    "page": "Helpers",
    "title": "Helpers",
    "category": "section",
    "text": "Permission\nhas_permission\npermissions_in\nreply\nsplit_message\nplaintext\nupload_file\nset_game\n@fetch\n@fetchval\n@deferred_fetch\n@deferred_fetchval"
},

{
    "location": "types/#",
    "page": "Types",
    "title": "Types",
    "category": "page",
    "text": "CurrentModule = Discord"
},

{
    "location": "types/#Discord.Activity",
    "page": "Types",
    "title": "Discord.Activity",
    "category": "type",
    "text": "A User activity. More details here.\n\nFields\n\nname           :: String\ntype           :: ActivityType\nurl            :: OptionalNullable{String}\ntimestamps     :: Optional{ActivityTimestamps}\napplication_id :: Optional{Snowflake}\ndetails        :: OptionalNullable{String}\nstate          :: OptionalNullable{String}\nparty          :: Optional{ActivityParty}\nassets         :: Optional{ActivityAssets}\nsecrets        :: Optional{ActivitySecrets}\ninstance       :: Optional{Bool}\nflags          :: Optional{Int}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ActivityTimestamps",
    "page": "Types",
    "title": "Discord.ActivityTimestamps",
    "category": "type",
    "text": "The start and stop times of an Activity. More details here.\n\nFields\n\nstart :: Optional{DateTime}\nstop  :: Optional{DateTime}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ActivityParty",
    "page": "Types",
    "title": "Discord.ActivityParty",
    "category": "type",
    "text": "The current party of an Activity\'s player. More details here.\n\nFields\n\nid   :: Optional{String}\nsize :: Optional{Vector{Int}}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ActivityAssets",
    "page": "Types",
    "title": "Discord.ActivityAssets",
    "category": "type",
    "text": "Images and hover text for an Activity. More details here.\n\nFields\n\nlarge_image :: Optional{String}\nlarge_text  :: Optional{String}\nsmall_image :: Optional{String}\nsmall_text  :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ActivitySecrets",
    "page": "Types",
    "title": "Discord.ActivitySecrets",
    "category": "type",
    "text": "Secrets for Rich Presence joining and spectating of an Activity. More details here.\n\nFields\n\njoin     :: Optional{String}\nspectate :: Optional{String}\nmatch    :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ActivityType",
    "page": "Types",
    "title": "Discord.ActivityType",
    "category": "type",
    "text": "An Activity\'s type. Available values are AT_GAME, AT_STREAMING, AT_LISTENING, and AT_WATCHING. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ActivityFlags",
    "page": "Types",
    "title": "Discord.ActivityFlags",
    "category": "type",
    "text": "Flags which indicate what an Activity payload contains. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Attachment",
    "page": "Types",
    "title": "Discord.Attachment",
    "category": "type",
    "text": "A Message attachment. More details here.\n\nFields\n\nid        :: Snowflake\nfilename  :: String\nsize      :: Int\nurl       :: String\nproxy_url :: String\nheight    :: Optional{Int}\nwidth     :: Optional{Int}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.AuditLog",
    "page": "Types",
    "title": "Discord.AuditLog",
    "category": "type",
    "text": "An audit log. More details here.\n\nFields\n\nwebhooks          :: Vector{Webhook}\nusers             :: Vector{User}\naudit_log_entries :: Vector{AuditLogEntry}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.AuditLogEntry",
    "page": "Types",
    "title": "Discord.AuditLogEntry",
    "category": "type",
    "text": "An entry in an AuditLog. More details here.\n\nFields\n\ntarget_id   :: Nullable{Snowflake}\nchanges     :: Optional{Vector{AuditLogChange}}\nuser_id     :: Snowflake\nid          :: Snowflake\naction_type :: ActionType\noptions     :: Optional{AuditLogOptions}\nreason      :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.AuditLogChange",
    "page": "Types",
    "title": "Discord.AuditLogChange",
    "category": "type",
    "text": "A change item in an AuditLogEntry.\n\nThe first type parameter is the type of new_value and old_value. The second is the type of the entity that new_value and old_value belong(ed) to.\n\nMore details here.\n\nFields\n\nnew_value :: Optional{T} where T\nold_value :: Optional{T} where T\nkey       :: String\ntype      :: Type{U} where U\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.AuditLogOptions",
    "page": "Types",
    "title": "Discord.AuditLogOptions",
    "category": "type",
    "text": "Optional information in an AuditLogEntry. More details here.\n\nFields\n\ndelete_member_days :: Optional{Int}\nmembers_removed    :: Optional{Int}\nchannel_id         :: Optional{Snowflake}\ncount              :: Optional{Int}\nid                 :: Optional{Snowflake}\ntype               :: Optional{OverwriteType}\nrole_name          :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ActionType",
    "page": "Types",
    "title": "Discord.ActionType",
    "category": "type",
    "text": "AuditLog action types. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Ban",
    "page": "Types",
    "title": "Discord.Ban",
    "category": "type",
    "text": "A User ban. More details here.\n\nFields\n\nreason :: Nullable{String}\nuser   :: User\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.DiscordChannel",
    "page": "Types",
    "title": "Discord.DiscordChannel",
    "category": "type",
    "text": "A Discord channel. More details here.\n\nNote: The name Channel is already used, hence the prefix.\n\nFields\n\nid                    :: Snowflake\ntype                  :: ChannelType\nguild_id              :: Optional{Snowflake}\nposition              :: Optional{Int}\npermission_overwrites :: Optional{Vector{Overwrite}}\nname                  :: Optional{String}\ntopic                 :: OptionalNullable{String}\nnsfw                  :: Optional{Bool}\nlast_message_id       :: OptionalNullable{Snowflake}\nbitrate               :: Optional{Int}\nuser_limit            :: Optional{Int}\nrate_limit_per_user   :: Optional{Int}\nrecipients            :: Optional{Vector{User}}\nicon                  :: OptionalNullable{String}\nowner_id              :: Optional{Snowflake}\napplication_id        :: Optional{Snowflake}\nparent_id             :: OptionalNullable{Snowflake}\nlast_pin_timestamp    :: OptionalNullable{DateTime}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ChannelType",
    "page": "Types",
    "title": "Discord.ChannelType",
    "category": "type",
    "text": "A DiscordChannel\'s type. Available values are CT_GUILD_TEXT, CT_DM, CT_GUILD_VOICE, CT_GROUP_DM, and CT_GUILD_CATEGORY.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Connection",
    "page": "Types",
    "title": "Discord.Connection",
    "category": "type",
    "text": "A User connection to an external service (Twitch, YouTube, etc.). More details here.\n\nFields\n\nid           :: String\nname         :: String\ntype         :: String\nrevoked      :: Bool\nintegrations :: Vector{Integration}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Embed",
    "page": "Types",
    "title": "Discord.Embed",
    "category": "type",
    "text": "A Message embed. More details here.\n\nFields\n\ntitle       :: Optional{String}\ntype        :: Optional{String}\ndescription :: Optional{String}\nurl         :: Optional{String}\ntimestamp   :: Optional{DateTime}\ncolor       :: Optional{Int}\nfooter      :: Optional{EmbedFooter}\nimage       :: Optional{EmbedImage}\nthumbnail   :: Optional{EmbedThumbnail}\nvideo       :: Optional{EmbedVideo}\nprovider    :: Optional{EmbedProvider}\nauthor      :: Optional{EmbedAuthor}\nfields      :: Optional{Vector{EmbedField}}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.EmbedThumbnail",
    "page": "Types",
    "title": "Discord.EmbedThumbnail",
    "category": "type",
    "text": "An Embed\'s thumbnail image information. More details here.\n\nFields\n\nurl       :: Optional{String}\nproxy_url :: Optional{String}\nheight    :: Optional{Int}\nwidth     :: Optional{Int}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.EmbedVideo",
    "page": "Types",
    "title": "Discord.EmbedVideo",
    "category": "type",
    "text": "An Embed\'s video information. More details here.\n\nFields\n\nurl    :: Optional{String}\nheight :: Optional{Int}\nwidth  :: Optional{Int}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.EmbedImage",
    "page": "Types",
    "title": "Discord.EmbedImage",
    "category": "type",
    "text": "An Embed\'s image information. More details here.\n\nFields\n\nurl       :: Optional{String}\nproxy_url :: Optional{String}\nheight    :: Optional{Int}\nwidth     :: Optional{Int}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.EmbedProvider",
    "page": "Types",
    "title": "Discord.EmbedProvider",
    "category": "type",
    "text": "An Embed\'s provider information. More details here.\n\nFields\n\nname :: Optional{String}\nurl  :: OptionalNullable{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.EmbedAuthor",
    "page": "Types",
    "title": "Discord.EmbedAuthor",
    "category": "type",
    "text": "An Embed\'s author information. More details here.\n\nFields\n\nname           :: Optional{String}\nurl            :: Optional{String}\nicon_url       :: Optional{String}\nproxy_icon_url :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.EmbedFooter",
    "page": "Types",
    "title": "Discord.EmbedFooter",
    "category": "type",
    "text": "An Embed\'s footer information. More details here.\n\nFields\n\ntext           :: String\nicon_url       :: Optional{String}\nproxy_icon_url :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.EmbedField",
    "page": "Types",
    "title": "Discord.EmbedField",
    "category": "type",
    "text": "An Embed field. More details here.\n\nFields\n\nname   :: String\nvalue  :: String\ninline :: Optional{Bool}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Emoji",
    "page": "Types",
    "title": "Discord.Emoji",
    "category": "type",
    "text": "An emoji. More details here.\n\nFields\n\nid             :: Nullable{Snowflake}\nname           :: String\nroles          :: Optional{Vector{Snowflake}}\nuser           :: Optional{User}\nrequire_colons :: Optional{Bool}\nmanaged        :: Optional{Bool}\nanimated       :: Optional{Bool}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.AbstractGuild",
    "page": "Types",
    "title": "Discord.AbstractGuild",
    "category": "type",
    "text": "A Discord guild (server). Can either be an UnavailableGuild or a Guild.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Guild",
    "page": "Types",
    "title": "Discord.Guild",
    "category": "type",
    "text": "A Discord guild (server). More details here.\n\nFields\n\nid                            :: Snowflake\nname                          :: String\nicon                          :: Nullable{String}\nsplash                        :: Nullable{String}\nowner                         :: Optional{Bool}\nowner_id                      :: Optional{Snowflake}\npermissions                   :: Optional{Int}\nregion                        :: Optional{String}\nafk_channel_id                :: OptionalNullable{Snowflake}\nafk_timeout                   :: Optional{Int}\nembed_enabled                 :: Optional{Bool}\nembed_channel_id              :: OptionalNullable{Snowflake}\nverification_level            :: VerificationLevel\ndefault_message_notifications :: Optional{MessageNotificationLevel}\nexplicit_content_filter       :: Optional{ExplicitContentFilterLevel}\nroles                         :: Optional{Vector{Role}}\nemojis                        :: Optional{Vector{Emoji}}\nfeatures                      :: Vector{String}\nmfa_level                     :: Optional{MFALevel}\napplication_id                :: OptionalNullable{Snowflake}\nwidget_enabled                :: Optional{Bool}\nwidget_channel_id             :: OptionalNullable{Snowflake}\nsystem_channel_id             :: OptionalNullable{Snowflake}\njoined_at                     :: Optional{DateTime}\nlarge                         :: Optional{Bool}\nunavailable                   :: Optional{Bool}\nmember_count                  :: Optional{Int}\nvoice_states                  :: Optional{Vector{VoiceState}}\nmembers                       :: Optional{Vector{Member}}\nchannels                      :: Optional{Vector{DiscordChannel}}\npresences                     :: Optional{Vector{Presence}}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.UnavailableGuild",
    "page": "Types",
    "title": "Discord.UnavailableGuild",
    "category": "type",
    "text": "An unavailable Discord guild (server). More details here.\n\nFields\n\nid          :: Snowflake\nunavailable :: Optional{Bool}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.VerificationLevel",
    "page": "Types",
    "title": "Discord.VerificationLevel",
    "category": "type",
    "text": "A Guild\'s verification level. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.MessageNotificationLevel",
    "page": "Types",
    "title": "Discord.MessageNotificationLevel",
    "category": "type",
    "text": "A Guild\'s default message notification level. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.ExplicitContentFilterLevel",
    "page": "Types",
    "title": "Discord.ExplicitContentFilterLevel",
    "category": "type",
    "text": "A Guild\'s explicit content filter level. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.MFALevel",
    "page": "Types",
    "title": "Discord.MFALevel",
    "category": "type",
    "text": "A Guild\'s MFA level. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.GuildEmbed",
    "page": "Types",
    "title": "Discord.GuildEmbed",
    "category": "type",
    "text": "A Guild embed. More details here.\n\nFields\n\nenabled    :: Bool\nchannel_id :: Nullable{Snowflake}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Integration",
    "page": "Types",
    "title": "Discord.Integration",
    "category": "type",
    "text": "A Guild integration. More details here.\n\nFields\n\nid                  :: Snowflake\nname                :: String\ntype                :: String\nenabled             :: Bool\nsyncing             :: Bool\nrole_id             :: Snowflake\nexpire_behaviour    :: Int\nexpire_grace_period :: Int\nuser                :: User\naccount             :: IntegrationAccount\nsynced_at           :: DateTime\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.IntegrationAccount",
    "page": "Types",
    "title": "Discord.IntegrationAccount",
    "category": "type",
    "text": "An Integration account. More details here.\n\nFields\n\nid   :: String\nname :: String\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Invite",
    "page": "Types",
    "title": "Discord.Invite",
    "category": "type",
    "text": "An invite to a Guild. More details here.\n\nFields\n\ncode                       :: String\nguild                      :: Optional{Guild}\nchannel                    :: DiscordChannel\napproximate_presence_cound :: Optional{Int}\napproximate_member_count   :: Optional{Int}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.InviteMetadata",
    "page": "Types",
    "title": "Discord.InviteMetadata",
    "category": "type",
    "text": "Metadata for an Invite. More details here.\n\nFields\n\ninviter    :: User\nuses       :: Int\nmax_uses   :: Int\nmax_age    :: Int\ntemporary  :: Bool\ncreated_at :: DateTime\nrevoked    :: Bool\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Member",
    "page": "Types",
    "title": "Discord.Member",
    "category": "type",
    "text": "A Guild member. More details here.\n\nFields\n\nuser      :: Optional{User}\nnick      :: OptionalNullable{String}\nroles     :: Vector{Snowflake}\njoined_at :: DateTime\ndeaf      :: Bool\nmute      :: Bool\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Message",
    "page": "Types",
    "title": "Discord.Message",
    "category": "type",
    "text": "A message sent to a DiscordChannel. More details here.\n\nFields\n\nid               :: Snowflake\nchannel_id       :: Snowflake\nguild_id         :: Optional{Snowflake}\nauthor           :: Optional{User}\nmember           :: Optional{Member}\ncontent          :: Optional{String}\ntimestamp        :: Optional{DateTime}\nedited_timestamp :: OptionalNullable{DateTime}\ntts              :: Optional{Bool}\nmention_everyone :: Optional{Bool}\nmentions         :: Optional{Vector{User}}\nmention_roles    :: Optional{Vector{Snowflake}}\nattachments      :: Optional{Vector{Attachment}}\nembeds           :: Optional{Vector{Embed}}\nreactions        :: Optional{Vector{Reaction}}\nnonce            :: OptionalNullable{Snowflake}\npinned           :: Optional{Bool}\nwebhook_id       :: Optional{Snowflake}\ntype             :: Optional{MessageType}\nactivity         :: Optional{MessageActivity}\napplication      :: Optional{MessageApplication}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.MessageActivity",
    "page": "Types",
    "title": "Discord.MessageActivity",
    "category": "type",
    "text": "A Message activity. More details here.\n\nFields\n\ntype     :: MessageActivityType\nparty_id :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.MessageApplication",
    "page": "Types",
    "title": "Discord.MessageApplication",
    "category": "type",
    "text": "A Rich Presence Message\'s application information. More details here.\n\nFields\n\nid          :: Snowflake\ncover_image :: String\ndescription :: String\nicon        :: String\nname        :: String\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.MessageType",
    "page": "Types",
    "title": "Discord.MessageType",
    "category": "type",
    "text": "A Message\'s type. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.MessageActivityType",
    "page": "Types",
    "title": "Discord.MessageActivityType",
    "category": "type",
    "text": "A Message\'s activity type. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Overwrite",
    "page": "Types",
    "title": "Discord.Overwrite",
    "category": "type",
    "text": "A permission overwrite. More details here.\n\nFields\n\nid    :: Snowflake\ntype  :: OverwriteType\nallow :: Int\ndeny  :: Int\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.OverwriteType",
    "page": "Types",
    "title": "Discord.OverwriteType",
    "category": "type",
    "text": "An Overwrite\'s type. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Presence",
    "page": "Types",
    "title": "Discord.Presence",
    "category": "type",
    "text": "A User\'s presence. More details here.\n\nFields\n\nuser       :: User\nroles      :: Optional{Vector{Snowflake}}\ngame       :: Nullable{Activity}\nguild_id   :: Optional{Snowflake}\nstatus     :: PresenceStatus\nactivities :: Vector{Activity}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.PresenceStatus",
    "page": "Types",
    "title": "Discord.PresenceStatus",
    "category": "type",
    "text": "A User\'s status sent in a Presence. Available values are PS_IDLE, PS_DND, PS_ONLINE, and PS_OFFLINE. More details here.\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Reaction",
    "page": "Types",
    "title": "Discord.Reaction",
    "category": "type",
    "text": "A Message reaction. More details here.\n\nFields\n\ncount :: Int\nme    :: Bool\nemoji :: Emoji\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Role",
    "page": "Types",
    "title": "Discord.Role",
    "category": "type",
    "text": "A User role. More details here.\n\nFields\n\nid          :: Snowflake\nname        :: String\ncolor       :: Optional{Int}\nhoist       :: Optional{Bool}\nposition    :: Optional{Int}\npermissions :: Optional{Int}\nmanaged     :: Optional{Bool}\nmentionable :: Optional{Bool}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.User",
    "page": "Types",
    "title": "Discord.User",
    "category": "type",
    "text": "A Discord user. More details here.\n\nFields\n\nid            :: Snowflake\nusername      :: Optional{String}\ndiscriminator :: Optional{String}\navatar        :: OptionalNullable{String}\nbot           :: Optional{Bool}\nmfa_enabled   :: Optional{Bool}\nlocale        :: Optional{String}\nverified      :: Optional{Bool}\nemail         :: OptionalNullable{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.VoiceRegion",
    "page": "Types",
    "title": "Discord.VoiceRegion",
    "category": "type",
    "text": "A region for a Guild\'s voice server. More details here.\n\nFields\n\nid         :: String\nname       :: String\nvip        :: Bool\noptimal    :: Bool\ndeprecated :: Bool\ncustom     :: Bool\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.VoiceState",
    "page": "Types",
    "title": "Discord.VoiceState",
    "category": "type",
    "text": "A User\'s voice connection status. More details here.\n\nFields\n\nguild_id   :: Optional{Snowflake}\nchannel_id :: Nullable{Snowflake}\nuser_id    :: Snowflake\nmember     :: Optional{Member}\nsession_id :: String\ndeaf       :: Bool\nmute       :: Bool\nself_deaf  :: Bool\nself_mute  :: Bool\nsuppress   :: Bool\n\n\n\n\n\n"
},

{
    "location": "types/#Discord.Webhook",
    "page": "Types",
    "title": "Discord.Webhook",
    "category": "type",
    "text": "A Webhook. More details here.\n\nFields\n\nid         :: Snowflake\nguild_id   :: Optional{Snowflake}\nchannel_id :: Snowflake\nuser       :: Optional{User}\nname       :: Nullable{String}\navatar     :: Nullable{String}\ntoken      :: Optional{String}\n\n\n\n\n\n"
},

{
    "location": "types/#Types-1",
    "page": "Types",
    "title": "Types",
    "category": "section",
    "text": "This page is organized in mostly-alphabetical order. Note that Snowflake ===  UInt64, Optional{T} === Union{T, Missing}, Nullable{T} === Union{T, Nothing}, and OptionalNullable{T} === Union{T, Missing, Nothing}. More details here.Most of the time, you\'ll receive objects of these types as return values rather than creating them yourself. However, should you wish to create your own instances from scratch, all of these types have keyword constructors. If a field value can be missing, then its keyword is optional.Activity\nActivityTimestamps\nActivityParty\nActivityAssets\nActivitySecrets\nActivityType\nActivityFlags\nAttachment\nAuditLog\nAuditLogEntry\nAuditLogChange\nAuditLogOptions\nActionType\nBan\nDiscordChannel\nChannelType\nConnection\nEmbed\nEmbedThumbnail\nEmbedVideo\nEmbedImage\nEmbedProvider\nEmbedAuthor\nEmbedFooter\nEmbedField\nEmoji\nAbstractGuild\nGuild\nUnavailableGuild\nVerificationLevel\nMessageNotificationLevel\nExplicitContentFilterLevel\nMFALevel\nGuildEmbed\nIntegration\nIntegrationAccount\nInvite\nInviteMetadata\nMember\nMessage\nMessageActivity\nMessageApplication\nMessageType\nMessageActivityType\nOverwrite\nOverwriteType\nPresence\nPresenceStatus\nReaction\nRole\nUser\nVoiceRegion\nVoiceState\nWebhook"
},

{
    "location": "tutorial/#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": "CurrentModule = Discord"
},

{
    "location": "tutorial/#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "warning: Warning\nThis is outdated, the regular documentation is a better reference.The completed and cleaned-up code can be found in wager.jl.In this tutorial, we\'re going to build a very basic currency/wager bot with Discord.jl. The bot will give users the following capabilities:Receive tokens from the bot on a regular interval\nSee their current token count\nSee a leaderboard of the top earners in the guild\nGive tokens to other users by username\nWager tokens on a coin flipA couple of rules apply:Users cannot wager or give more tokens than they currently have (this means that users cannot go into debt)\nUsers cannot give tokens to users in a different guildLet\'s get started! First of all, we need to import Discord.jl, and we\'ll also start a main function which we\'ll add to as we go along.using Discord\n\nfunction main()\n    c = Client(ENV[\"DISCORD_TOKEN\"]; prefix=\'!\')\n    # To be continued...\nendNext, let\'s think about how we want to maintain the state of our application. According to the requirements and rules outlined above, we need to track users by username and their token count, which is nonnegative, by guild. Therefore, our internal state representation is going to be a mapping from guild IDs to mappings from usernames to token counts via a Dict{Discord.Snowflake, Dict{String, UInt}}. In this example, we aren\'t particularly concerned with persistent storage so we\'ll just keep everything in memory.const TOKENS = Dict{Discord.Snowflake, Dict{String, UInt}}()Now, since this Dict starts off empty, how are we going to populate it with users? We can do this by defining a handler on GuildCreate, whose guild field contains its own ID, as well as a list of Members, each of which contains a User, and therefore a username.const TOKEN_START = 100\n\nfunction add_users(c::Client, e::GuildCreate)\n    if !haskey(TOKENS, e.guild.id)\n        TOKENS[e.guild.id] = Dict()\n    end\n\n    guild = TOKENS[e.guild.id]\n\n    for m in e.guild.members\n        if !haskey(guild, m.user.username)\n            guild[m.user.username] = TOKEN_START\n        end\n    end\nendLet\'s add that handler to our Client, and connect to the gateway with open:function main()\n    # ...\n    add_handler!(c, GuildCreate, add_users)\n    open(c)\nendWith that taken care of, we can start distributing tokens. First, we need to decide how often to distribute tokens, and how many should be given.using Dates\n\nconst TOKEN_INTERVAL = Minute(30)\nconst TOKEN_INCREMENT = 100Now, we can write a function to give out tokens on this interval, and get it running in the background.function distribute_tokens(c::Client)\n    while isopen(c)\n        for g in keys(TOKENS)\n            for u in keys(g)\n                g[u] += TOKEN_INCREMENT\n            end\n        end\n        sleep(TOKEN_INTERVAL)\n    end\nend\n\nfunction main()\n    # ...\n    @async distribute_tokens()\nendNext, we need to let users see their token count. We can do this by adding a few helpers, and a command via add_command!.# Insert a guild and/or user from a message into the token cache if they don\'t exist.\nfunction ensure_updated(m::Message)\n    if !haskey(TOKENS, m.guild_id)\n        TOKENS[m.guild_id] = Dict()\n    end\n    if !haskey(TOKENS[m.guild_id], m.author.username)\n        TOKENS[m.guild_id][m.author.username] = TOKEN_START\n    end\nend\n\n# Get the token count for the user who sent a message.\ntoken_count(m::Message) = get(get(TOKENS, m.guild_id, Dict()), m.author.username, 0)\n\nfunction reply_token_count(c::Client, m::Message)\n    ensure_updated(m)\n    reply(c, m, \"You have $(token_count(m)) tokens.\")\nend\n\nfunction main()\n    # ...\n    add_command!(c, :count, reply_token_count)\nendWhen a user types \"!count\", the bot will reply with their token count. Next, we can easily implement the guild leaderboard for the \"!leaderboard\" command.function reply_token_leaderboard(c::Client, m::Message)\n    ensure_updated(m)\n\n    # Get user => token count pairs by token count in descending order.\n    sorted = sort(collect(TOKENS[m.guild_id]); by=p -> p.second, rev=true)\n\n    entries = String[]\n    for i in 1:min(10, length(sorted))  # Display at most 10.\n        user, tokens = sorted[i]\n        push!(entries, \"$user: $tokens\")\n    end\n\n    reply(c, m, join(entries, \"\\n\"))\nend\n\nfunction main()\n    # ...\n    add_command!(c, :leaderboard, reply_token_leaderboard)\nendNext, we can implement the sending of tokens between users. We need to do a few new things:Parse the number of tokens and the recipient from the command\nCheck that the user sending the tokens has enough to send\nCheck that both users are in the same guildfunction send_tokens(c::Client, m::Message)\n    ensure_updated(m)\n\n    words = split(m.content)\n    if length(words) < 3\n        return reply(c, m, \"Invalid !send command.\")\n    end\n\n    tokens = tryparse(UInt, words[2])\n    tokens === nothing && return reply(c, m, \"\'$(words[2])\' is not a valid number.\")\n\n    recipient = words[3]\n    if !haskey(TOKENS[m.guild_id], recipient)\n        return reply(c, m, \"Couldn\'t find user \'$recipient\' in this guild.\")\n    end\n    if token_count(m) < tokens\n        return reply(c, m, \"You don\'t have enough tokens to give.\")\n    end\n\n    TOKENS[m.guild_id][m.author.username] -= tokens\n    TOKENS[m.guild_id][recipient] += tokens\n    reply(c, m, \"You sent $tokens tokens to $recipient.\")\nend\n\nfunction main()\n    # ...\n    add_command!(c, :send, send_tokens)\nendEasy! And last but not least, we\'ll add the wagering command.function wager_tokens(c::Client, m::Message)\n    ensure_updated(m)\n\n    words = split(m.content)\n    if length(words) < 2\n        return reply(c, m, \"Invalid !wager command.\")\n    end\n\n    tokens = try\n        parse(UInt, words[2])\n    catch\n        return reply(c, m, \"\'$(words[2])\' is not a valid number of tokens.\")\n    end\n    if token_count(m) < tokens\n        return reply(c, m, \"You don\'t have enough tokens to wager.\")\n    end\n\n    if rand() > 0.5\n        TOKENS[m.guild_id][m.author.username] += tokens\n        reply(c, m, \"You win!\")\n    else\n        TOKENS[m.guild_id][m.author.username] -= tokens\n        reply(c, m, \"You lose.\")\n    end\nend\n\nfunction main()\n    # ...\n    add_command!(c, :wager, wager_tokens)\n    wait(c)\nendThe wait command at the end of main blocks until the client disconnects.And that\'s it! Run this main function with the $DISCORD_TOKEN environment variable set and see your bot in action.note: Note\nPlenty of corners were cut here, so please don\'t see this as best practices for bot creation! It\'s just meant to demonstrate some features and help you get your feet wet."
},

]}