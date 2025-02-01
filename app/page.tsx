import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

// NOTE(jimmylee): This is a kitchen sink of all components.
// When forking or remixing, you'll likely only need a few.
import Accordion from '@components/Accordion';
import ActionBar from '@components/ActionBar';
import ActionButton from '@components/ActionButton';
import ActionListItem from '@components/ActionListItem';
import AlertBanner from '@components/AlertBanner';
import AS400 from '@components/examples/AS400';
import Avatar from '@components/Avatar';
import Badge from '@components/Badge';
import BarLoader from '@components/BarLoader';
import BarProgress from '@components/BarProgress';
import Block from '@components/Block';
import BlockLoader from '@components/BlockLoader';
import Breadcrumbs from '@components/BreadCrumbs';
import Button from '@components/Button';
import ButtonGroup from '@components/ButtonGroup';
import Card from '@components/Card';
import CardDouble from '@components/CardDouble';
import Checkbox from '@components/Checkbox';
import Chessboard from '@components/Chessboard';
import CodeBlock from '@components/CodeBlock';
import ContentFluid from '@components/ContentFluid';
import ComboBox from '@components/ComboBox';
import DataTable from '@components/DataTable';
import DatePicker from '@components/DatePicker';
import DashboardRadar from '@components/examples/DashboardRadar';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Denabase from '@components/examples/Denabase';
import Dialog from '@components/Dialog';
import Divider from '@components/Divider';
import Drawer from '@components/Drawer';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';
import Grid from '@components/Grid';
import HoverComponentTrigger from '@components/HoverComponentTrigger';
import Indent from '@components/Indent';
import Input from '@components/Input';
import IntDevLogo from '@components/svg/IntDevLogo';
import ListItem from '@components/ListItem';
import Message from '@components/Message';
import MessageViewer from '@components/MessageViewer';
import MessagesInterface from '@components/examples/MessagesInterface';
import ModalAlert from '@components/modals/ModalAlert';
import ModalCanvasSnake from '@components/modals/ModalCanvasSnake';
import ModalCanvasPlatformer from '@components/modals/ModalCanvasPlatformer';
import ModalChess from '@components/modals/ModalChess';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';
import ModalError from '@components/modals/ModalError';
import ModalMatrixModes from '@components/modals/ModalMatrixModes';
import ModalStack from '@components/ModalStack';
import ModalTrigger from '@components/ModalTrigger';
import Navigation from '@components/Navigation';
import NumberRangeSlider from '@components/NumberRangeSlider';
import Package from '@root/package.json';
import RadioButtonGroup from '@components/RadioButtonGroup';
import Row from '@components/Row';
import RowSpaceBetween from '@components/RowSpaceBetween';
import Script from 'next/script';
import Select from '@components/Select';
import SidebarLayout from '@components/SidebarLayout';
import Table from '@components/Table';
import TableRow from '@components/TableRow';
import TableColumn from '@components/TableColumn';
import Text from '@components/Text';
import TextArea from '@components/TextArea';
import TreeView from '@components/TreeView';
import UpdatingDataTable from '@components/examples/UpdatingDataTable';
import Link from 'next/link';

export const dynamic = 'force-static';

// NOTE(jimmylee)
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://jhochendoner.com';
  const handle = '@hochen97';

  return {
    description,
    icons: {
      apple: [{ url: '/img/JRH Shadow Red-Orange.svg' }, { url: '/img/JRH Shadow Red-Orange.svg', sizes: '180x180', type: 'image/svg' }],
      icon: '/img/JRH Shadow Red-Orange.svg',
      other: [
        {
          rel: 'JRH Shadow Red-Orange',
          url: '/img/JRH Shadow Red-Orange.svg',
        },
      ],
      shortcut: '/img/JRH Shadow Red-Orange.svg',
    },
    metadataBase: new URL('https://jhochendoner.com'),
    openGraph: {
      description,
      images: [],
      title,
      type: 'website',
      url,
    },
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      handle,
      images: [],
      title,
      url,
    },
    url,
  };
}

// NOTE(jimmylee)
// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
export default async function Page(props) {
    return (
      <DefaultLayout previewPixelSRC="/img/JRH Shadow Red-Orange.svg">
        <br />
        <Grid>
          <Row>
          {/* {Package.name.toUpperCase()} <Badge>{Package.version}</Badge> */}
          </Row>
          {/* <img style={{"width": "40px", "marginBottom": "-5px"}} src="/img/JRH Shadow Red-Orange.svg" alt="Jacob Hochendoner" /> */}
          <RowSpaceBetween><img style={{"width": "40px", "marginLeft": "-5px"}} src="/img/JRH Shadow Red-Orange.svg" alt="Jacob Hochendoner" />{Package.name.toUpperCase()}</RowSpaceBetween>
          <Row>{Package.description}</Row>
        </Grid>
  
        <DebugGrid />
        <DefaultActionBar />
        <Grid>
            <ActionListItem icon={`⭢`} href="https://linkedin.com/in/jacobhochendoner" target="_blank">
            Connect with me on LinkedIn
            </ActionListItem>
            <ActionListItem icon={`⭢`} href="https://github.com/hochen97" target="_blank">
            Check out my GitHub
            </ActionListItem>
            <ActionListItem icon={`⭢`} href="https://jhochendoner.com/jacobhochendoner2.vcf" target="_blank">
            Get my business card
            </ActionListItem>
        </Grid>
        <Grid>
        <Accordion defaultValue={true} title="PROJECTS">
            Projects I've worked on.
            <br />
            <br />
            <Card title="PHANTOM.COMPUTER" mode="left">
                A computer that follows you, and disappears when not needed.
                <Divider />
                <br />
                <ul>
                <ListItem>
                <a href="https://phantom.computer" target="_blank">phantom.computer</a>
                </ListItem>
                <ListItem>
                <a href="https://github.com/hochen97/phantom.computer" target="_blank">phantom.computer github</a>
                </ListItem>
                </ul>
            </Card>
            <br />
            <Card title="INFINITUM" mode="left">
                A tool to make working with databases not suck
                <Divider />
                <br />
                <ul>
                <ListItem>
                <a href="https://github.com/hochen97/infinitum" target="_blank">infinitum github</a>
                </ListItem>
                </ul>
            </Card>
            <br />
            <Card title="GO-LINKS" mode="left">
                A personal URL Shortener.
                <Divider />
                <br />
                <ul>
                <ListItem>
                <a href="https://github.com/Hochen97/jrh-web-bookmarks" target="_blank">jrh-links github</a>
                </ListItem>
                </ul>
            </Card>
            <br />
            <Card title="THETATAUOMB.COM" mode="left">
                A website for my fraternity.
                <Divider />
                <br />
                <ul>
                <ListItem>
                <a href="https://thetatauomb.com" target="_blank">thetatauomb.com</a>
                </ListItem>
                </ul>
            </Card>
            <br />
            <br />
        </Accordion>
        <Accordion defaultValue={true} title="COMPANIES">
            Companies I've started or worked for.
            <br />
            <br />
            <Card title="PSEG Long Island" mode="left">
                <Divider />
                <RowSpaceBetween>Sr. Solution Architect - Enterprise Analytics <Badge>Apr 2023 - Present&nbsp;</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Currently making history ;)</ListItem>
                </ul>
                <br />
                <br />
                <Divider />
                <RowSpaceBetween>Senior Data Architect <Badge>Nov 2020 - Mar 2022</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Architected the design and strategy for data analytics platform optimization and continuous improvement</ListItem>
                <br />
                <ListItem>Performed a complete review & refactoring of ETL pipelines responsible for processing billions of records daily with a focus on cost and efficiency, reducing the overall monthly pipeline cost by ~$20k</ListItem>
                <br />
                <ListItem>Designed reference architecture and implementation guidelines for event-based pipelines, enabling critical use-cases for business continuity and situational awareness</ListItem>
                <br />
                <ListItem>Led the effort for security review, approval, and inclusion of new AWS services for data analytics platform improvements</ListItem>
                <br />
                <ListItem>Championed software development best practices (code review, clear and concise documentation) for the data analytics platform team and provided guidance for teams within enterprise technology</ListItem>
                <br />
                <ListItem>The main languages for this role included Python, PySpark, and SQL</ListItem>
                </ul>
                <br />
                <br />
                <Divider />
                <RowSpaceBetween>Data Engineer<Badge>Aug 2019 - Nov 2020</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem> Designed and built out data pipelines utilizing AWS Glue and PySpark</ListItem>
                <br/>
                <ListItem> Designed and implemented data ingestion pipelines from varying sources of data including flat file, database, and API-based source systems.</ListItem>
                <br/>
                <ListItem> Provided training, guidance, and direction to other team members on strategies for implementing complex data pipelines for cutting edge BI, AI, and ML use-cases.</ListItem>
                <br/>
                <ListItem> Managed the enterprise’s Tableau deployment including licensing, configuration, and organizing education sessions for business-side employees.</ListItem>
                <br/>
                <ListItem> Managed the enterprise’s GitHub installation, including licensing, configuration, team and repository organization, and maintenance.</ListItem>
                <br/>
                <ListItem> The main languages for this role included Python, PySpark, and SQL</ListItem>
                </ul>
            </Card>
            <br />
            <Card title="FDO.AI" mode="left">
                <Divider />
                <RowSpaceBetween>Co-Founder, CAIO <Badge>Aug 2023 - Oct 2024</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Co-founded FDO.AI, a company that provides AI solutions to small businesses and freelancers/gig workers</ListItem>
                <br />
                <ListItem>Designed and implemented the AI architecture for the company, including inference APIs, chat interfaces, and prompting</ListItem>
                <br />
                <ListItem>Created the following AI chatbots:</ListItem>
                    <ul>
                        <ListItem>Edison - A Small Business Mentor</ListItem>
                        <ListItem>Arthur - An Autonomous Agent that is skilled in bookkeeping </ListItem>
                    </ul>
                </ul>
            </Card>
            <br />
            <Card title="NYSHEX" mode="left">
                <Divider />
                <RowSpaceBetween>Co-Founder, CAIO <Badge>Aug 2023 - Oct 2024</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Spearheaded the effort to design, implement, and secure an efficient enterprise-wide logical data warehouse platform using AWS native technologies (glue/pyspark, lambda, s3, redshift)</ListItem>
                <br />
                <ListItem>Enabled wide-spectrum reporting by implementing and securing a high-performance data-fabric (trino/starburst)</ListItem>
                <br />
                <ListItem>Designed and developed a custom data integration system to ingest disparate data sources (API, email, databases) in a scalable and easily replicable manner</ListItem>
                <br />
                <ListItem>Designed and developed a slack integration to enable human-in-the-loop data pipelines, end-user data pipeline kick-off, and other custom user-interaction in a modular, low-cost serverless framework.</ListItem>
                <br />
                <ListItem>Enabled customer reporting data export via the design and implementation of data pipelines to cleanse, format, and export data to the customer at request via a number of secure transfer methods.</ListItem>
                <br />
                <ListItem>Championed data-quality and data-governance best practices to ensure quality reporting</ListItem>
                </ul>
            </Card>
            <br />
            <Card title="LegalSoft USA, Inc." mode="left">
                <Divider />
                <RowSpaceBetween>Co-Founder, CTO<Badge>May 2016 - Aug 2018</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Created GIFTANDNOTE.COM, A web-based tool built to assist lawyers with Promissory Note/Gift calculation.</ListItem>
                <br/>
                <ListItem>Designed and implemented full user stories for user authentication, client management, client information management, nursing home search, and calculation</ListItem>
                <br/>
                <ListItem>Implemented algorithm that saved end users 65% of their time compared to traditional methods</ListItem>
                <br/>
                <ListItem>Managed infrastructure and devops cycle including hosting platform, DNS management, and deployment workflow</ListItem>
                <br/>
                <ListItem>Technologies Used include Wordpress, PHP, HTML, CSS, JQuery and JavaScript, and MySQL</ListItem>
                </ul>
            </Card>
            <br />
            <Card title="Simon Elliot Events / BAS" mode="left">
                <Divider />
                <RowSpaceBetween>Creative Engineering Consultant (Interactive Media) <Badge>Jun 2012 - Jul 2018</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Consulted on major project developments for computer-based interactive services. Served on call to help with any computer-based projects needed, from troubleshooting software to team-based development of a core product for use in an event setting, such as a digital sign-in book, photo-booth, or projection-mapping solution.</ListItem>
                </ul>
                <br />
                <br />
                <Divider />
                <RowSpaceBetween>Technical Support Consultant <Badge>Jun 2012 - Jul 2018</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Consulted Simon Elliot Events on all of their technical support needs, including performing repair on Macintosh and Windows systems.</ListItem>
                </ul>
            </Card>
            <br />
            <Card title="Conra" mode="left">
                <Divider />
                <RowSpaceBetween>Full-Stack Web Developer<Badge>May 2018 - Jul 2019</Badge></RowSpaceBetween>
                <Divider />
                <ul>
                <ListItem>Worked directly with clients to help formulate and cultivate their ideas in the most efficient and cost-effective manner. </ListItem>
                <br />
                <ListItem>Built web-apps and webpages directly from photoshop design documents and core ideas. </ListItem>
                <br />
                <ListItem>Performed site maintenance such as plugin and framework updates, security checks, and simple error corrections. e.g., spelling errors, photo alignment, body copy replacement. </ListItem>
                <br />
                <ListItem>Mainly worked with web technologies such as HTML, CSS, JavaScript, JQuery and PHP.</ListItem>
                </ul>
            </Card>
        </Accordion>
        </Grid>

        <ModalStack />
    </DefaultLayout>
  );
}