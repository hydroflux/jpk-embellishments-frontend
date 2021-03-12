import React from 'react'
import { 
    FacebookShareButton , FacebookIcon,
    TwitterShareButton, TwitterIcon,
    LinkedinShareButton, LinkedinIcon,
    PinterestShareButton, PinterestIcon
    } from 'react-share'

export default function SocialShare() {

    const url = window.location.href
    const title = "JP&K Embellishments"
    const quote = "Check out this shop I found!"
    const hashtag = ["jpkembellishments", "macrame"]
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
                title={quote}
                hashtags={hashtag}
                className={buttonClass}
                // className={classes.socialMediaButton}
                >
                <TwitterIcon size={iconSize} round={round}/>
            </TwitterShareButton>
            <LinkedinShareButton
                url={url}
                title={title}
                summary={quote}
                className={buttonClass}
                // className={classes.socialMediaButton}
                >
                <LinkedinIcon size={iconSize} round={round}/>
            </LinkedinShareButton>
            <PinterestShareButton
                media={url}
                description={quote}
                >
                <PinterestIcon size={iconSize} round={round}/>
            </PinterestShareButton>
        </div>
    )
}
