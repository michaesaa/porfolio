/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */

import PropTypes from "prop-types"

// Online Button
export const ButtonOutline = ({
    href = "",
    target = "_self",
    label = "",
    icon = "",
    classes = "",

}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                icon={icon}
                className={"btn btn-outline" + classes}
            >
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline" + classes} >
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }

            </button>
        )
    }

}

ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}


export const Button = ({
    href = "",
    target = "_self",
    label = "",
    icon = "",
    classes = "",

}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                icon={icon}
                className={"btn btn-primary" + classes}
            >
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary" + classes} >
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }

            </button>
        )
    }

}

Button.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}


