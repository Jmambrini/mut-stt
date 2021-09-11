import React from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';
import './notFound.scss';

const NotFound = (props) => (
  <div className="notFound">
    <Result status="404" title="Erro 404" subTitle="Página não encontrada.">
      <Button
        type="primary"
        className="btn-go-back"
        onClick={() => props.history.push('/')}
      >
        Voltar à página inicial
      </Button>
    </Result>
  </div>
);

NotFound.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NotFound;
