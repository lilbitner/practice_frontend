import React from 'react'



export class TestingPractice extends React.Component {


  Practice = (something: boolean ) =>  {
    if (something === true) {
      return 5 + 10
    }

    if (something === false) {
      return 10 - 5
    }

  }

  ArrayPractice = (array: string[]) => {
    return array.pop 
  }
}