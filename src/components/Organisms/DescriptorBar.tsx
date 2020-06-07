import React from 'react'
import Descriptor from '../Molecules/Descriptors'
import  {ObjectArrayProps, MyObject } from '../../interfaces/IDescriptorBar'
import styled from 'styled-components'

 

const StyledDescriptorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 1008px;
  padding-top: 259px;
  margin-left: -1rem;
  
`; 

const StyledDescriptor = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  align: left;
`


export default class DescriptorBar extends React.Component<ObjectArrayProps>{


 descriptorItem = (props: ObjectArrayProps): JSX.Element[]  => { 
    return this.props.descriptorObjects.map((object: MyObject) => {
      return <StyledDescriptor> <Descriptor descriptorTitle={object.descriptorTitle} value={object.value}/> </StyledDescriptor>
    })
  }
  
  render(){
    return(
     <StyledDescriptorContainer>
        {this.descriptorItem(this.props)}
      </StyledDescriptorContainer>
    )
  }
}