import React from 'react';
import { RecoilRoot, useRecoilTransactionObserver_UNSTABLE, RecoilState } from 'recoil';

interface RecoilPersistProps {
  states: RecoilState<any>[];
  prefix: string;
}
function RecoilPersist(props: RecoilPersistProps) {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    for (const state of props.states) {
      const { contents } = snapshot.getLoadable(state)
      localStorage.setItem(`${props.prefix}-${state.key}`, JSON.stringify(contents))
    }
  })
  return null
}

export interface RecoilContainerProps {
  children: React.ReactNode;
  persistStates: RecoilPersistProps['states'];
  persistPrefix: string;
}
export function RecoilContainer(props: RecoilContainerProps) {

  return (
    <RecoilRoot initializeState={({ set }) => {
      for (const persistState of props.persistStates) {
        try {
          const data = localStorage.getItem(`${props.persistPrefix}-${persistState.key}`)
          if (!data) continue
          const state = JSON.parse(data)
          set(persistState, state)
        } catch (error) {
          continue
        }
      }
    }}>
      <RecoilPersist prefix={props.persistPrefix} states={props.persistStates} />
      {props.children}
    </RecoilRoot>
  )
}

