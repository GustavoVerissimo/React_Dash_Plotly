# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PrimeiroComponente(Component):
    """A PrimeiroComponente component.


Keyword arguments:

- myDiv (string; optional)"""
    @_explicitize_args
    def __init__(self, myDiv=Component.UNDEFINED, **kwargs):
        self._prop_names = ['myDiv']
        self._type = 'PrimeiroComponente'
        self._namespace = 'primeiro_componente'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['myDiv']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PrimeiroComponente, self).__init__(**args)
