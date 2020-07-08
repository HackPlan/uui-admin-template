import React from 'react';
import { User } from "../types/User";

export interface PersonaProps {
  user: User;
}

export function Persona(props: PersonaProps) {
  return (
    <div>
      <div className="w-12 h-12 rounded-full overflow-hidden ">
        <img className="w-full h-full" src={props.user.avatar} />
      </div>
    </div>
  )
}

