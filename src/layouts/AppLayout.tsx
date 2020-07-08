import React from 'react';
import { Layout } from '@hackplan/uui';
import { Logo } from '../partials/Logo';
import { Navigation } from '../partials/Navigation';
import { Icons } from '../icons';

export interface AppLayoutProps {
  children: React.ReactNode;
}
function AppLayout(props: AppLayoutProps) {
  return (
    <Layout>
      <Layout.Sider className="shadow-sm" style={{ backgroundColor: '#E7EBEE', width: 200 }}>
        <Logo />
        <Navigation />
      </Layout.Sider>
      <Layout.Content style={{ backgroundColor: '#F9FAFB' }}>
        <Layout>
          <Layout.TopBar className="bg-white shadow-sm"></Layout.TopBar>
          <Layout.Content>
            <div>{props.children}</div>
            <footer className="my-12">
              <div className="flex flex-row justify-center items-center">
                <a className="w-64 text-right" href="https://template.uui.cool">UUI Template</a>
                <a className="w-16" href="https://template.uui.cool"><Icons.Github /></a>
                <a className="w-64 text-left" href="https://uui.cool">UUI</a>
              </div>
              <div className="flex flex-row justify-center items-center">
                Copyright © 2020 UUI
              </div>
            </footer>
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
}

export default AppLayout;
