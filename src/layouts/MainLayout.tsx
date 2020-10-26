import { Layout } from '@hackplan/uui';
import React from 'react';
import { AppBreadcrumb } from '../partials/AppBreadcrumb';
import { Footer } from '../partials/Footer';
import { Logo } from '../partials/Logo';
import { Navigation } from '../partials/Navigation/Navigation';
import { ToolBar } from '../partials/ToolBar/ToolBar';

export interface MainLayoutProps {
  children: React.ReactNode;
}
function MainLayout(props: MainLayoutProps) {
  return (
    <Layout>
      <Layout.Nav className="shadow-sm" style={{ backgroundColor: '#E7EBEE', width: 200 }}>
        <Logo />
        <Navigation />
      </Layout.Nav>
      <Layout.Main style={{ backgroundColor: '#F9FAFB' }}>
        <Layout>
          <Layout.Header className="bg-white shadow-sm">
            <ToolBar />
          </Layout.Header>
          <Layout.Main>
            <div className="mx-16 my-8">
              <AppBreadcrumb />
              {props.children}
              <Footer />
            </div>
          </Layout.Main>
        </Layout>
      </Layout.Main>
    </Layout>
  );
}

export default MainLayout;
