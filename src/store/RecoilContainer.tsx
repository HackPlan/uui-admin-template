import React from 'react';
import { RecoilRoot, useRecoilTransactionObserver_UNSTABLE, RecoilState } from 'recoil';

interface RecoilPersistProps {
  states: RecoilState<any>[];
}
function RecoilPersist(props: RecoilPersistProps) {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    for (const state of props.states) {
      const { contents } = snapshot.getLoadable(state)
      localStorage.setItem(state.key, JSON.stringify(contents))
    }
  })
  return null
}

export interface RecoilContainerProps {
  children: React.ReactNode;
  persistStates: RecoilPersistProps['states'];
}
export function RecoilContainer(props: RecoilContainerProps) {

  return (
    <RecoilRoot initializeState={({ set }) => {
      for (const persistState of props.persistStates) {
        try {
          const data = localStorage.getItem(persistState.key)
          if (!data) continue
          const state = JSON.parse(data)
          set(persistState, state)
        } catch (error) {
          continue
        }
      }
    }}>
      <RecoilPersist states={props.persistStates} />
      {props.children}
    </RecoilRoot>
  )
}

