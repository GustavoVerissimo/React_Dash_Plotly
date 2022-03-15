# AUTO GENERATED FILE - DO NOT EDIT

export pc_textinput

"""
    pc_textinput(;kwargs...)

A TextInput component.

Keyword arguments:
- `id` (String; optional)
- `label` (String; optional)
- `p` (String; optional)
- `value` (String; optional)
"""
function pc_textinput(; kwargs...)
        available_props = Symbol[:id, :label, :p, :value]
        wild_props = Symbol[]
        return Component("pc_textinput", "TextInput", "primeiro_componente", available_props, wild_props; kwargs...)
end

