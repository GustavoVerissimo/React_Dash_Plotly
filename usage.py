import primeiro_componente
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    primeiro_componente.PrimeiroComponente(
        id='input',
        myDiv='id-myDiv'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output():
    return


if __name__ == '__main__':
    app.run_server(debug=True)
