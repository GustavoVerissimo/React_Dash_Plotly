import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import interact from 'interactjs';
import Plotly from 'plotly.js-dist-min';

interact('.draggable')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,

    listeners: {
      move: dragMoveListener,

      end(event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener(event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

window.dragMoveListener = dragMoveListener


export default function PrimeiroComponente(props) {
  const {myDiv} = props;
 
  useEffect(() => {
    var data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }];
    
    var layout = {
      height: 400,
      width: 500
    };
    
    let nyDiv = document.getElementById('input')
    Plotly.newPlot(nyDiv, data, layout);
  })

  return (
      <div id={myDiv} className="draggable"></div>

  );
}


PrimeiroComponente.defaultProps = {};

PrimeiroComponente.propTypes = {
  
  myDiv: PropTypes.string,

  
}