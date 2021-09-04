import React from 'react'
import {Link, useRoute} from 'wouter'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    
    return (
      <Link {...props}>
        <a className={classNames(isActive ? 'bg-indigo-600' : '',
          "text-white rounded-md py-2 px-3 inline-flex items-center text-sm font-medium")}>
          {props.children}
        </a>
      </Link>
    );
  };

export default React.memo(ActiveLink)