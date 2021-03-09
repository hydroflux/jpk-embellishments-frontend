import React from 'react'
import { FacebookShareButton , FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'react-share'

export default function SocialShare() {

    const url = "www.google.com"
    const quote = "Some Quote"
    const hashtag = "#jpkembellishments"
    const iconSize = 36
    const round = true
    const buttonClass = 'social-media-button'

    return (
        <div className="social-buttons">
            <FacebookShareButton
                url={url}
                quote={quote}
                hashtag={hashtag}
                className={buttonClass}
                >
                <FacebookIcon size={iconSize} round={round}/>
                {/* https://medium.com/camperstribe/react-social-media-integration-with-react-share-and-react-helmet-84d9def6a445 */}
            </FacebookShareButton>
            <TwitterShareButton
                url={url}
                quote={quote}
                hashtag={hashtag}
                className={buttonClass}
                // className={classes.socialMediaButton}
                >
                <TwitterIcon size={iconSize} round={round}/>
            </TwitterShareButton>
            <LinkedinShareButton
                url={url}
                quote={quote}
                hashtag={hashtag}
                className={buttonClass}
                // className={classes.socialMediaButton}
                >
                <LinkedinIcon size={iconSize} round={round}/>
            </LinkedinShareButton>
        </div>
    )
}
