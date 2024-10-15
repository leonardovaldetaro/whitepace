import Styles from './Button.module.scss';
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


interface ButtonProps {
    to?: string;
    onClick?: () => void;
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({
    to,
    onClick,
    children,
    type = 'button',
    variant = 'primary',
    ...props
}: ButtonProps) {

    const isLink = Boolean(to);

    if (isLink) {
        return to!.startsWith('http') ? (
            <a href={to} className={Styles.btn__secondary} {...props}>
                {children}
            </a>
        ) : (
            <Link to={to!} className={Styles.btn__primary} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} type={type} className={Styles.btn} {...props}>
            {children}
        </button>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Button.defaultProps = {
    type: 'button',
    variant: 'primary',
};