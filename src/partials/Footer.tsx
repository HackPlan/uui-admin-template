import React from 'react';
import { Icons } from '../icons';

export interface FooterProps {
}

export function Footer(props: FooterProps) {
  return (
    <footer className="my-12">
      <div className="flex flex-row justify-center items-center">
        <a className="w-64 text-right" href="https://template.uui.cool">Template</a>
        <a className="w-16" href="https://template.uui.cool"><Icons.Github /></a>
        <a className="w-64 text-left" href="https://uui.cool">UUI</a>
      </div>
      <div className="flex flex-row justify-center items-center">
        Copyright © 2020
      </div>
    </footer>
  )
}

