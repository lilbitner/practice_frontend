import React from 'react'
import { DescriptorProps } from '../../interfaces/IDescriptor'

export default class Descriptor extends React.Component<DescriptorProps> {
  render() {
    return(
    <>
      <h4>{this.props.descriptorTitle}</h4>
      <h4>{this.props.value}</h4>
    </>
    )
  }
}