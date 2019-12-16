import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    light: state
});

const LightComponent = ({ light, dispatch }) => (
    <div>
        <p>{light}</p>
        <button
            onClick={() => dispatch({ type: 'ADD' })}
        >
            ADD 1
      </button>
        <button
            onClick={() => dispatch({ type: 'REMOVE' })}
        >
            REMOVE 1
      </button>
        <button
            onClick={() => dispatch({ type: 'ADDTEN' })}
        >
            ADD 10
      </button>
        <button
            onClick={() => dispatch({ type: 'REMOVETEN' })}
        >
            REMOVE 10
      </button>
        <button
            onClick={() => dispatch({ type: 'RESET' })}
        >
            RESET
      </button>

    </div>
);

export default connect(mapStateToProps)(LightComponent);

