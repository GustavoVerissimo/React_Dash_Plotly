# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TextInput(Component):
    """A TextInput component.


Keyword arguments:

- id (string; optional)

- label (string; optional)

- p (string; optional)

- value (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.UNDEFINED, p=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'label', 'p', 'value']
        self._type = 'TextInput'
        self._namespace = 'primeiro_componente'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'label', 'p', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TextInput, self).__init__(**args)
