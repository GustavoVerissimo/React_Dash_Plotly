# AUTO GENERATED FILE - DO NOT EDIT

#' @export
pTextInput <- function(id=NULL, label=NULL, p=NULL, value=NULL) {
    
    props <- list(id=id, label=label, p=p, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TextInput',
        namespace = 'primeiro_componente',
        propNames = c('id', 'label', 'p', 'value'),
        package = 'primeiroComponente'
        )

    structure(component, class = c('dash_component', 'list'))
}
