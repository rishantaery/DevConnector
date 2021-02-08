import React, { Fragment } from 'react'

export const NotFound = () => {
    return (
        <Fragment>
            <h1 class="x-large text-primary">
                <i class="fas fa-exclamation-triangle"> Page Not Found</i>
            </h1>
            <p class="large"> Sorry this page Does Not Exist</p>
        </Fragment>
    )
}
