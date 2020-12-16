import Img from "gatsby-image"
import { chunk, sum } from "lodash"
import React from "react"
import { Box } from "rebass"
import styled from "styled-components"
import { theme } from "./theme"

const StyledBox = styled(Box)`
    display:inline-block;
    width: ${props => props.width}%;

    
    /*Mobile Styles*/
    @media (max-width: ${theme.devices.tablet}px) {
        width:100%;

    }

`

const Gallery = ({ images, itemsPerRow }) => {
  const aspectRatios = images.map(image => image.aspectRatio)

  // For each breakpoint, calculate the aspect ratio sum of each row's images
  const rowAspectRatioSums = chunk(aspectRatios, itemsPerRow).map(
    rowAspectRatios => {
      // Sum aspect ratios of images in the given row

      return sum(rowAspectRatios)
    }
  )

  //add aspect ratio sums to image object
  //cleaner way to do this??
  let curRow = 0
  images.forEach((image, i) => {
    const rowIndex = i % itemsPerRow
    if (i !== 0 && rowIndex === 0) {
      curRow += 1
    }

    images[i].aspectRatioSum = rowAspectRatioSums[curRow]
  })

  return (
    <div>
      {images.map((image, i) => (
        <StyledBox
          key={image.src + i} //!using i because src is repetivite for testing
          as={Img}
          fluid={image}
          title={image.caption}
          width= {(image.aspectRatio / image.aspectRatioSum) * 100} //!currently defaulting to 3 per row
        />
      ))}
    </div>
  )
}

export default Gallery