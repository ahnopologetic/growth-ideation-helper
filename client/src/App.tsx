import React from 'react';
import './App.css';
import { GrowthForm } from './_view/molecules/GrowthForm';
import { DefaultPageView } from './_page/default';

const TEST_INQURIES = [{ title: '실험 가설', description: '실험을 위해서 가설을 세워주세요!', rule: {} }, { title: '실험 가설2', description: '실험을 위해서 가설을 세워주세요!2', rule: {} }]

const App: React.FC = () => {
  return (
    <div className="App">
      <DefaultPageView>
        <GrowthForm title='Growth Cell IDEA' description='그로쓰 셀을 위한 아이디어' inquiries={TEST_INQURIES} />
      </DefaultPageView>
    </div>
  );
}

export default App;
