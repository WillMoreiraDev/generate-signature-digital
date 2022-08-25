import { useState, createRef, useEffect } from 'react'

import { useScreenshot } from 'use-react-screenshot'

import { ContainerStyle, AreaInput, AreaStyles, AreaSignatureChoose } from './styles'

function App() {
  const [fullName, setFullName] = useState('')
  const [shortName, setShortName] = useState('')
  const [isActive, setIsActive] = useState('')

  const [signatureChose, setSignatureChose] = useState('')
  const [isShow, setIsShow] = useState(true)


  const ref1 = createRef(null)
  const ref2 = createRef(null)
  const ref3 = createRef(null)
  const [style, takeScreenshotOne] = useScreenshot()

  const getStyleOne = () => takeScreenshotOne(ref1.current)
  const getStyleTwo = () => takeScreenshotOne(ref2.current)
  const getStyleThree = () => takeScreenshotOne(ref3.current)

  function getbase64Image() {
    setSignatureChose(style)
    setIsShow(false)
  }

  function changeStyleSignature() {
    setIsShow(true)
  }

  const getInitials = (fullName) => {
    const allNames = fullName.trim().split(' ');
    const initials = allNames.reduce((acc, curr, index) => {
      if(index === 0 || index === allNames.length - 1){
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, '');
    return initials;
  }

  useEffect(() => {
    console.log(signatureChose)
  }, [signatureChose])
  

  return (
    <ContainerStyle>
      {
        isShow && (
          <AreaInput>
            <div className="item">
              <label htmlFor="">Fullname</label>
              <input 
                type="text" 
                value={fullName}
                onChange={({target}) => {
                  setFullName(target.value)
                  setShortName(getInitials(fullName.toUpperCase()))
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="">Short name</label>
              <input 
                type="text" 
                value={shortName}
                onChange={({target}) => setShortName(target.value)}
              />
            </div>
          </AreaInput>
        )
      }

      {
        (fullName !== '' && isShow) && (
          <AreaStyles>
            <button 
              className={(isActive === 1) ? 'active' : ''}
              onClick={() => {
                setIsActive(1)
                getStyleOne()
              }}
            >
              <div className="area-signature">
                <div>
                  <span htmlFor="">Fullname</span>
                  <div className="sign style-one" ref={ref1}>
                    <strong>{fullName}</strong>
                  </div>
                </div>
                <div>
                  <span htmlFor="">Short Name</span>
                  <div className="sign style-one">
                    <strong>{shortName}</strong>
                  </div>
                </div>
              </div>
            </button>
    
            <button 
              className={(isActive === 2) ? 'active' : ''}
              onClick={() => {
                setIsActive(2)
                getStyleTwo()
              }}
            >
              <div className="area-signature">
                <div>
                  <span htmlFor="">Fullname</span>
                  <div className="sign style-one" ref={ref2}>
                    <strong>{fullName}</strong>
                  </div>
                </div>
                <div>
                  <span htmlFor="">Short Name</span>
                  <div className="sign style-one">
                    <strong>{shortName}</strong>
                  </div>
                </div>
              </div>
            </button>
    
            <button 
              className={(isActive === 3) ? 'active' : ''}
              onClick={() => {
                setIsActive(3)
                getStyleThree()
              }}
            >
              <div className="area-signature">
                <div>
                  <span htmlFor="">Fullname</span>
                  <div className="sign style-one" ref={ref3}>
                    <strong>{fullName}</strong>
                  </div>
                </div>
                <div>
                  <span htmlFor="">Short Name</span>
                  <div className="sign style-one">
                    <strong>{shortName}</strong>
                  </div>
                </div>
              </div>
            </button>
            
          </AreaStyles>
        )
      }


      {
        (isActive !== '') && (
          <>
            <AreaSignatureChoose>
              <strong>Chosen signature style</strong>
              <img src={style} alt="" />

              {
                isShow && <button onClick={getbase64Image}>Use this style signature</button>
              }

              {
                !isShow && <button className='btn-change' onClick={changeStyleSignature}>Change style signature</button>
              }
              
            </AreaSignatureChoose>
          </>
        )
      }
    </ContainerStyle>
  )
}

export default App
