
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";

export default () => {
  return (
    <>
      <Row className="justify-content-md-center pt-4 mt-4">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="O'zbekiston bo'yicha yillar miqyosida Green Cardga ro'yxatdan o'tganlar statistikasi"
            value="2013 - 2021"
            data={[654327, 1193657, 1387420, 1488984, 1576179, 2114446, 2846227, 2572653, 832938]}
          />
        </Col>
      </Row>

      <Row className="justify-content-md-center mt-4">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Butun dunyo bo'yicha yillar miqyosida Green Cardga ro'yxatdan o'tganlar statistikasi"
            value="2013 - 2021"
            data={[12577355, 14633971, 14418063, 17573364, 19344586, 23088613, 22425053, 23182554, 11830707]}
          />
        </Col>
      </Row>
    </>
  );
};
