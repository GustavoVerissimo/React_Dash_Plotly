# AUTO GENERATED FILE - DO NOT EDIT

#' @export
pPrimeiroComponente <- function(myDiv=NULL) {
    
    props <- list(myDiv=myDiv)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PrimeiroComponente',
        namespace = 'primeiro_componente',
        propNames = c('myDiv'),
        package = 'primeiroComponente'
        )

    structure(component, class = c('dash_component', 'list'))
}
