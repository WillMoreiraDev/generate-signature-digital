import styled from 'styled-components'

export const ContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #202124;
`

export const AreaInput = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  .item {
    flex: 1;
    &:not(:first-child) {
      margin-left: 1.6rem;
    }
    label {
      display: block;
      color: white;
      font-weight: 400;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      height: 48px;
      border-radius: 6px;
      padding: 0 1.6rem;
      font-size: 1.6rem;
    }
  }
`;

export const AreaStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.4rem;
  margin-top: 4.8rem;
  width: 100%;
  max-width: 90rem;
  button {
    border-radius: 6px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border .3s;
    &:hover {
      border: 2px solid yellow;
    }
    &.active {
      border: 2px solid green;
    background-color: #cfcfcf;
    }
    &:nth-child(2) {
      .area-signature {
        & > div {
          .sign {
            strong {
              font-family: 'Lobster', cursive;
              font-size: 2.3rem;
            }
          }
        }
      }
    }
    &:last-child {
      .area-signature {
        & > div {
          .sign {
            strong {
              font-family: 'Pacifico', cursive;
              font-size: 2.1rem;
            }
          }
        }
      }
    }
    .area-signature {
      & > div {
        padding: 1.6rem 0;
        &:not(:last-child) {
          border-bottom: 1px solid gray;
        }
        span {
          display: block;
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }
        .sign {
          strong {
            font-family: 'Dancing Script', cursive;
            font-size: 2.5rem;
          }
        }
      }
    }
  }
`

export const AreaSignatureChoose = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  padding: 3.2rem;
  border-radius: 6px;
  strong {
    text-align: center;
    margin-bottom: 2.4rem;
    display: block;
    text-align: center;
    font-size: 1.6rem;
  }

  button {
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 6px;
    font-size: 1.8rem;
    background-color: #448444;
    color: white;
    cursor: pointer;
    &.btn-change {
      background-color: #aeaeae;
    }
  }
`