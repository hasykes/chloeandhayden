import Img from "gatsby-image"
import { chunk, sum } from "lodash"
import React from "react"
import { Box } from "rebass"

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
  const aspectRatios = images.map(image => image.aspectRatio)

  // For each breakpoint, calculate the aspect ratio sum of each row's images
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      // Split images into groups of the given size
      chunk(aspectRatios, itemsPerRow).map((rowAspectRatios, i) => {
        // Sum aspect ratios of images in the given row

        return sum(rowAspectRatios)
      })
  )

  return (
    <div>
      {images.map((image, i) => (
        <Box
          key={image.src + i} //!using i because src is repetivite for testing
          as={Img}
          fluid={image}
          title={image.caption}
          style={{
            width: rowAspectRatioSumsByBreakpoints.map(
              // Return a value for each breakpoint
              (rowAspectRatioSums, j) => {
                // Find out which row the image is in and get its aspect ratio sum
                const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
                const rowAspectRatioSum = rowAspectRatioSums[rowIndex]

                return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`
              }
            )[1], //!currently defaulting to 3 per row
          }}
          css={{ display: "inline-block" }}
        />
      ))}
    </div>
  )
}

export default Gallery
