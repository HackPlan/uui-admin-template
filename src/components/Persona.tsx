import React from 'react';
import { UserAuthUser } from '../types/Auth';

export interface PersonaProps {
  user: UserAuthUser;
}

export function Persona(props: PersonaProps) {
  return (
    <div>
      <div className="w-12 h-12 rounded-full overflow-hidden ">
        <img className="w-full h-full" src={props.user.avatar} alt="persona" />
      </div>
    </div>
  )
}

