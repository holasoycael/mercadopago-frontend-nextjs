import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export default styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast {
    font-family: var(--font-poppins);
    @media (max-width: 1039px) {
      min-height: inherit;
      max-width: 320px;
      margin-top: 1.6rem;
      margin-right: 1.6rem;
      margin-left: auto;
      border-radius: 3px;
    }
  }
  .Toastify__toast--error {
    background: #f56464;
    box-shadow: 0 2px 5px 0 rgba(156, 3, 3, 0.26);
  }
  .Toastify__toast--warning {
    background: #f5f364;
    box-shadow: 0 2px 5px 0 rgba(156, 154, 3, 0.26);
    .Toastify__toast-body {
      color: #000;
      font-weight: 400;
    }
    .Toastify__close-button {
      color: #000;
    }
    .Toastify__progress-bar {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  .Toastify__toast--success {
    background: #64f588;
    box-shadow: 0 2px 5px 0 rgba(3, 156, 36, 0.26);
    .Toastify__toast-body {
      color: #000;
      font-weight: 400;
    }
    .Toastify__close-button {
      color: #000;
    }
    .Toastify__progress-bar {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  .Toastify__toast--info {
    background: #91ccf3;
    box-shadow: 0 2px 5px 0 rgba(3, 63, 156, 0.26);
    .Toastify__toast-body {
      color: #000;
      font-weight: 400;
    }
    .Toastify__close-button {
      color: #000;
    }
    .Toastify__progress-bar {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  .Toastify__toast-body {
    color: #fff;
    font-weight: 400;
  }
  .Toastify__progress-bar {
    height: 3px;
  }
  .Toastify__progress-bar--default {
    background: #c00;
  }
  .Toastify__close-button--default {
    margin: auto;
  }
  .Toastify__close-button {
    margin: auto;
  }
  .Toastify__close-button svg {
    float: left;
  }
`
