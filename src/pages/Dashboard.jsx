import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import FormGraphics from '../components/FormGraphics/FormGraphics';
import { useStateContext } from '../context/ContextProvider';
import Table from '../components/Table/Table';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import GraphBlock from '../components/GraphBlocks/GraphBlocks';

const Dashboard = () => {
  const { tableDisplay, selectedField, setSelectedField } = useStateContext();
  return (
    <div className="flex relative bg-main-bg">
      <Sidebar />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ml-[240px] bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="Dashboard" />
          <FormGraphics selectedField={selectedField} setSelectedField={setSelectedField} />
          {/*{tableDisplay ? <Table /> : <GraphBlock selectedField={selectedField} setSelectedField={setSelectedField} />}*/}
          <div className="text-white">
            Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это
            боль.." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tellus ac orci gravida aliquet nec
            ut nibh. Cras pharetra odio vitae maximus mollis. Etiam tempus gravida leo ut hendrerit. Vivamus viverra
            lectus et volutpat dapibus. Aliquam erat volutpat. Pellentesque iaculis, nisi ac sagittis pharetra, mauris
            justo scelerisque turpis, in ultricies risus mi sit amet dui. Aliquam erat volutpat. Fusce pellentesque
            maximus risus sed facilisis. Maecenas hendrerit ipsum nec feugiat feugiat. Maecenas at rutrum est. Nullam
            lobortis fermentum sem vel gravida. Etiam sit amet maximus massa. Vestibulum placerat tempus diam, ut porta
            eros ullamcorper et. Sed eu justo eget mauris ullamcorper sagittis sed ut lectus. In hac habitasse platea
            dictumst. Proin consectetur a risus vitae tristique. Fusce auctor purus in nulla consequat, vel vulputate ex
            mattis. Proin sit amet augue turpis. In imperdiet, lectus sit amet interdum venenatis, dolor dolor tempus
            magna, vel tincidunt mauris ex et est. Suspendisse potenti. Suspendisse malesuada vestibulum volutpat.
            Pellentesque tristique magna eu orci viverra, at feugiat ligula bibendum. Vestibulum vel porttitor ipsum.
            Donec nec metus egestas, rhoncus metus a, sollicitudin orci. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Vivamus congue est lacus, vel sagittis leo volutpat et. Proin
            sed faucibus velit. Nulla consequat mattis fringilla. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec et vestibulum libero. Duis mattis vestibulum mauris, vitae ornare
            dolor ornare eu. Morbi id risus imperdiet, dignissim enim eget, scelerisque orci. Phasellus tempus maximus
            hendrerit. Vivamus facilisis facilisis mi, vitae mollis odio posuere non. Ut accumsan felis ac justo mollis
            rutrum. Mauris quis cursus enim, eu placerat lacus. Integer non faucibus felis. Nunc sed ante erat. Sed enim
            purus, ultrices eu ex a, cursus dictum nulla. Morbi fringilla, nisl eu consequat rutrum, tortor libero
            fermentum nisl, nec sodales libero lacus eget ante. In pretium magna bibendum orci faucibus gravida.
            Praesent sollicitudin arcu ligula, id accumsan diam aliquet non. Maecenas ut est enim. Phasellus placerat
            ligula blandit, tempor elit nec, consectetur dui. Cras pharetra sem ac pharetra volutpat. Sed nec neque
            fermentum, fringilla felis laoreet, pretium ex. Quisque tincidunt diam quis metus condimentum cursus. Ut
            mauris leo, viverra quis sodales et, faucibus non nisi. Cras congue, mauris eget venenatis lobortis, justo
            eros accumsan urna, vitae venenatis erat magna in nisi. In interdum elit nec ipsum consectetur tincidunt.
            Phasellus lacinia, metus vel viverra pharetra, urna enim pharetra mi, eleifend gravida nibh ligula non nunc.
            Fusce malesuada molestie risus, interdum sodales nunc cursus sed. Aenean eu velit vitae tortor iaculis
            gravida. Curabitur auctor, dui ac congue rhoncus, diam sem blandit massa, at varius leo quam vitae massa.
            Cras aliquam varius arcu, in finibus tellus sodales nec. Vestibulum pretium elementum nisi, vitae molestie
            nibh ultricies sit amet. Etiam euismod dolor sed est bibendum volutpat. Aenean turpis diam, porttitor et
            risus et, dignissim condimentum ex. Sed semper rutrum viverra. In nunc felis, maximus in consectetur quis,
            ultrices at lectus. Mauris odio purus, sagittis id nulla id, porta maximus dui. Sed purus sapien, varius
            vitae felis cursus, rhoncus dapibus nulla. Aliquam urna sem, porttitor quis nulla id, finibus placerat
            metus. Aliquam erat volutpat. Morbi sit amet placerat purus. Aliquam lacinia rhoncus porttitor. Duis
            convallis sollicitudin leo eget blandit. Maecenas vulputate sapien quis consectetur ultrices. Vestibulum
            quam libero, aliquam vel sagittis id, ultrices at enim. Nam pulvinar ante vitae aliquam dapibus. Etiam ac
            mattis lorem, eget sodales metus. Sed convallis purus sapien, id fermentum dui imperdiet eget. Maecenas
            sapien urna, porttitor in dolor sed, eleifend venenatis ipsum. In porttitor urna id sapien feugiat lobortis.
            Aliquam ac blandit tortor, a convallis sem. Fusce congue dui non hendrerit dignissim. Nullam diam sem,
            imperdiet tincidunt diam eu, tempus ullamcorper arcu. Integer euismod tortor blandit fermentum bibendum.
            Mauris eu lectus purus. Curabitur sodales tortor et dolor ornare laoreet. Pellentesque eros nunc, sagittis
            et condimentum placerat, vehicula a massa. Pellentesque sollicitudin, dolor vel euismod pharetra, lorem
            tortor pulvinar velit, non fringilla dui purus sed lectus. In ac leo nibh. Vivamus tellus nibh, facilisis
            vitae condimentum eu, molestie vel ipsum. Donec velit dolor, commodo quis velit nec, bibendum accumsan nibh.
            Mauris interdum arcu non est aliquet tincidunt. Sed eleifend purus erat, in viverra dui aliquam a. Aenean ac
            ipsum semper, commodo orci vel, feugiat risus. Nam non nibh ex. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Donec aliquam vitae nunc vel mollis. Donec tempor sapien at
            ligula aliquet, sit amet ultrices lectus convallis. Nunc a finibus sapien. Aenean eros nunc, imperdiet nec
            lorem eu, cursus imperdiet mi. Mauris mollis leo a risus interdum lacinia. Aliquam nec dui nibh. Praesent
            nunc mauris, egestas eget accumsan vitae, blandit ut arcu. Nam lacus ligula, sollicitudin id ipsum et,
            fermentum laoreet dui. Nam dui dui, aliquam quis porta ut, porta in magna. Donec eu magna ligula. In hac
            habitasse platea dictumst. Vivamus lacinia finibus pulvinar. Aliquam id lorem feugiat, dapibus est ac,
            rutrum ipsum. Proin semper lorem ligula, sed sodales tortor maximus quis. Sed eu dictum elit. Proin et sem
            malesuada, accumsan nibh nec, commodo est. Nam ac purus quis est imperdiet malesuada. Praesent vitae felis
            justo. Donec eu nunc enim. Quisque viverra quis odio sed pretium. Suspendisse id bibendum justo, a interdum
            metus. Proin et ante tellus. Nulla vel velit pharetra, volutpat sapien nec, finibus sem. Integer quis lacus
            vitae nibh consectetur iaculis. Aliquam fermentum mi eu egestas vulputate. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Morbi volutpat, massa eu pellentesque interdum, metus
            magna pretium erat, aliquet fringilla lorem enim sed tortor. Sed id est ac ligula egestas efficitur sed ut
            ex. Ut nisl felis, molestie in urna sed, porta congue urna. Integer laoreet porttitor sem ac aliquet. Proin
            suscipit ex massa, porta hendrerit tellus fringilla bibendum. Nam nec quam nec felis porttitor consequat sed
            sed turpis. Donec sagittis sed lorem vitae faucibus. Nam sed ex maximus, ultricies ligula id, dignissim
            tortor. Nam elit leo, pretium ut tortor et, porttitor finibus libero. Proin ex elit, ornare nec ante eu,
            malesuada convallis turpis. Proin eget leo eu ligula ullamcorper dignissim. Etiam eget nunc at risus dapibus
            porttitor ut eu erat. Ut egestas purus rhoncus, maximus tortor eu, pellentesque odio. Nam non fermentum
            sapien. Etiam condimentum pulvinar velit, non scelerisque velit vestibulum vel. Nam ultrices erat eu mauris
            fringilla, sed pharetra lectus tincidunt. Phasellus eleifend mi eget dignissim auctor. Donec sit amet mauris
            dictum, viverra neque ut, lobortis tellus. Sed ultrices lobortis porttitor. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Donec pharetra, arcu maximus suscipit iaculis, mauris nisi ultricies sem,
            vitae dictum elit nisi ut ante. Aliquam eu luctus nulla. Donec sed finibus velit. Phasellus a congue ex, id
            ultrices est. Mauris eget lorem malesuada erat volutpat ullamcorper vitae porttitor quam. Cras ligula diam,
            varius vitae condimentum non, varius sit amet arcu. Aliquam dictum elit enim, quis lacinia justo consequat
            efficitur. Nunc non risus accumsan nisl iaculis mollis. Fusce nunc dolor, commodo eu est vel, tristique
            cursus purus. Nam ullamcorper est auctor mauris porttitor, accumsan ultrices eros maximus. Cras sed leo
            faucibus, porta ex a, auctor libero. Cras suscipit mi ut orci interdum sollicitudin. Pellentesque rutrum eu
            orci nec venenatis. Proin euismod bibendum ipsum, sed tincidunt ex volutpat sed. Nulla condimentum velit
            ante, et dapibus nisi tempus ut. Integer hendrerit dolor sed diam gravida fermentum. Mauris facilisis at
            enim ac tempor. Ut ac risus vel metus molestie ornare sit amet ac sem. Integer at risus ut mi feugiat
            pulvinar. Proin eleifend faucibus placerat. Praesent sodales vitae justo nec imperdiet. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Nullam vitae malesuada lorem. Mauris tincidunt rhoncus
            rhoncus. Nulla varius augue sit amet metus posuere auctor. Aliquam id ante id metus condimentum imperdiet.
            Duis non justo quis urna cursus posuere sit amet et diam. Aliquam nunc diam, condimentum id est quis,
            finibus maximus mauris. Sed ac orci a nisi convallis hendrerit. Nullam placerat, dui non consequat iaculis,
            leo ipsum feugiat leo, vel venenatis arcu velit quis neque. Aliquam velit elit, imperdiet non accumsan eget,
            semper in felis. Praesent scelerisque, sapien at facilisis gravida, sem sem porta risus, vel elementum enim
            lacus nec tortor. Pellentesque vulputate in diam eu congue. Aenean tincidunt risus nec est congue
            consectetur a at urna. In at elit sit amet lacus ullamcorper iaculis eget quis orci. Mauris egestas sit amet
            enim vitae sollicitudin. Integer nec volutpat nisl. Proin lacinia ex justo, at aliquet elit cursus ut.
            Mauris egestas congue odio, vel maximus augue sodales vitae. Vestibulum euismod id diam at gravida. Morbi ac
            tincidunt purus. Aliquam volutpat felis a viverra fermentum. Vivamus id efficitur ipsum. Praesent nec leo
            nec dolor pretium ultrices id id augue. Donec auctor neque quis leo congue egestas. Praesent faucibus
            scelerisque eleifend. Praesent viverra odio cursus vehicula placerat. Mauris id nisi elit. Fusce non lacus
            vestibulum erat tincidunt aliquam a ac purus. Phasellus tellus lorem, semper eget fermentum ut, volutpat eu
            neque. Suspendisse ac felis et mauris bibendum venenatis a sit amet justo. Sed malesuada turpis ultricies
            leo euismod vehicula. Praesent felis nunc, facilisis suscipit mauris non, finibus pretium sapien. Vestibulum
            vehicula lorem fermentum mi ornare malesuada. In felis velit, luctus quis pellentesque vitae, dictum vitae
            risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
            blandit mauris et orci posuere blandit. Morbi condimentum mattis congue. Nulla et molestie nibh, quis
            faucibus libero. Integer laoreet orci viverra tortor ultrices sagittis. Aliquam sed ipsum nibh. Etiam massa
            justo, aliquam eget hendrerit ac, tempus quis ex. Vestibulum ac eros elit. Sed eu ex nibh. Aliquam non
            hendrerit risus, in vulputate lectus. Suspendisse rutrum, lectus id elementum dignissim, ipsum nisi porta
            lorem, at feugiat dui justo a metus. Etiam bibendum malesuada dignissim. Integer tincidunt mattis maximus.
            Suspendisse commodo sed magna vel tempus. Donec egestas, massa ac ullamcorper porta, nulla orci pretium
            felis, ut dictum felis nulla rhoncus enim. Nunc et nibh libero. Aenean tempus fermentum arcu ac tristique.
            Cras mollis orci eget turpis commodo, non ullamcorper lorem ultrices. Maecenas pretium id erat ac egestas.
            Proin euismod nibh eget laoreet maximus. Pellentesque tempus mi tempor velit gravida, vel cursus neque
            imperdiet. Donec tincidunt, diam ut convallis pulvinar, elit leo consectetur felis, sit amet pulvinar nisi
            arcu lacinia lacus. Pellentesque bibendum placerat ipsum, tincidunt vestibulum justo faucibus nec. Morbi ut
            fermentum orci. Donec lobortis rhoncus mollis. Nunc aliquet consequat nisl. Nulla pellentesque metus lectus,
            vitae suscipit magna elementum a. Vivamus scelerisque rhoncus tellus id porttitor. Praesent a molestie enim,
            pharetra aliquet turpis. In hendrerit auctor leo, non convallis arcu tempus eu. Sed sed justo a urna laoreet
            vehicula. Mauris dapibus mi ut placerat ullamcorper. Praesent sit amet porta dui. Sed augue turpis,
            condimentum non orci id, tempus egestas odio. Phasellus imperdiet lobortis consectetur. Sed sed venenatis
            lacus. Nulla in velit nisi. Nunc quis feugiat purus. Nam dapibus non augue vel tempor. Nulla nec rutrum
            mauris. Nam non lorem id elit convallis tincidunt. Fusce nec nibh lectus. Vivamus ut sapien a sem facilisis
            commodo vitae vel sapien. Ut sagittis, purus eu laoreet condimentum, erat dui congue dui, sed tempus magna
            neque a ipsum. Aliquam elit eros, pharetra eu nunc vel, porttitor semper sapien. Praesent et risus pulvinar
            arcu commodo ultricies a id dolor. Quisque nunc erat, maximus eu lacus et, placerat fringilla lorem.
            Praesent arcu purus, eleifend luctus augue in, placerat sollicitudin erat. In tempor nisl non tortor
            malesuada, vel vulputate tellus gravida. Integer interdum felis metus, sed blandit ante rhoncus eu. Nulla
            quis ante in dolor bibendum maximus. Praesent porttitor nibh eu neque aliquam, nec dictum libero tempus.
            Donec mi ligula, mollis vitae neque tristique, sollicitudin porta elit. Mauris vitae neque quis turpis
            sollicitudin consequat in et lectus. Etiam faucibus diam vitae tellus accumsan fermentum. Pellentesque magna
            tellus, pretium id quam eget, sodales ultricies sapien. Nullam non ultrices lacus. Nullam rutrum at augue
            eget vestibulum. Maecenas tempor, mauris ut viverra egestas, tellus metus laoreet turpis, et aliquet lorem
            ligula id sem. Suspendisse consequat at augue venenatis fringilla. Duis scelerisque laoreet massa,
            consectetur ullamcorper mi mollis nec. Sed et eros sit amet augue rutrum aliquam. Phasellus cursus nunc
            eros, sed dignissim velit fermentum eu. Fusce in pellentesque massa. Sed tincidunt, massa id malesuada
            maximus, neque ante volutpat nulla, eu ullamcorper mauris odio tincidunt mi. Morbi egestas dui magna, at
            iaculis felis laoreet quis. Nam feugiat, tortor sed consequat dignissim, odio ex blandit nisl, vitae cursus
            urna est quis nulla. Suspendisse accumsan semper dui, at rhoncus felis condimentum sit amet. Fusce rutrum,
            risus eget auctor tincidunt, nibh erat condimentum leo, in varius augue ipsum eu urna. Duis accumsan
            fermentum interdum. Suspendisse ut nisl pulvinar, sodales justo non, pretium velit. Cras semper massa eget
            ante accumsan porta. Sed sagittis quam libero, sed molestie augue dictum eu. Nullam quis lorem laoreet elit
            aliquam varius. Praesent vel nisl arcu. Curabitur sed leo sem. Mauris pretium mauris massa, sit amet
            sagittis felis accumsan ac. Donec cursus imperdiet lorem quis fringilla. Maecenas rutrum non lacus id
            sagittis. Sed in est dapibus tortor mattis finibus. Suspendisse blandit metus sed libero eleifend
            scelerisque. Duis at tincidunt sem. Ut nec sapien purus. Phasellus semper ligula dolor. Sed et nunc mollis,
            tempor nisl sit amet, cursus felis. Suspendisse euismod cursus purus quis porttitor. Sed turpis elit,
            imperdiet et lacinia id, gravida eget elit. Praesent elementum euismod elit, nec porta leo malesuada in.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dictum pharetra leo, eget posuere
            eros ultrices ac. Proin eu elementum mi, a ullamcorper ipsum. Cras hendrerit nibh a pellentesque faucibus.
            Curabitur nec sapien eu magna consequat mollis in mattis magna. Aliquam luctus sapien eu leo sagittis, in
            aliquam eros varius. Morbi sit amet sapien vitae erat placerat mattis. Etiam laoreet a lacus vitae mollis.
            Maecenas congue tincidunt commodo. Quisque dignissim in dui eu lobortis. Quisque sagittis vulputate eros
            vitae varius. Phasellus eget eros orci. Cras dictum mi dui, eget dignissim mi posuere id. Quisque congue est
            eget nulla hendrerit, hendrerit interdum nibh dignissim. Ut tincidunt id sapien id dictum. Morbi id nisl
            vitae dui sagittis pulvinar. Nullam et pulvinar sapien. Nulla id varius ante. Maecenas fermentum aliquet
            tellus. Ut tortor velit, tincidunt lacinia risus ac, imperdiet varius sapien. Nulla mi lacus, venenatis sed
            facilisis et, ullamcorper ac orci. Nunc vulputate, eros a pulvinar sodales, elit justo tincidunt ipsum, at
            faucibus mi orci et nunc. Suspendisse semper nunc urna, vitae tempor nisl lobortis vel. Etiam in interdum
            nisi. Mauris pellentesque sapien eget condimentum semper. Mauris mollis urna in pellentesque tincidunt.
            Integer sed lectus vel mauris placerat cursus ut ut nulla. Nullam faucibus tortor eget neque sodales, ac
            vehicula leo eleifend. Vestibulum bibendum aliquet fermentum. Pellentesque eleifend nibh sit amet tincidunt
            molestie. Sed eget fermentum nisl. Curabitur sollicitudin, neque nec consequat ullamcorper, massa arcu
            accumsan erat, vel euismod leo risus eget magna. Vivamus eu porttitor elit, eu imperdiet nibh. Nunc mollis
            congue ornare. In semper, ante porta commodo facilisis, leo justo commodo tellus, vel euismod lorem mi
            condimentum odio. Fusce viverra felis in auctor ornare. Mauris nulla erat, consequat in ante eget, lacinia
            dignissim neque. Donec pharetra neque eget cursus eleifend. Nam et nulla id libero sollicitudin imperdiet ac
            eget ante. Cras sit amet volutpat massa. Donec cursus nulla at accumsan placerat. Vestibulum a tortor est.
            Phasellus vel lacus rutrum, tempor elit ut, porta nunc. Ut rutrum tortor nulla, eget molestie orci dictum
            aliquet. Pellentesque a libero vel tortor fringilla lacinia. Donec vitae tincidunt urna. Duis et orci vitae
            sem interdum pulvinar vitae eleifend purus. Nam semper nisl nec ornare aliquam. Sed molestie ipsum at nulla
            pellentesque, sed laoreet nisi semper. Vivamus tortor neque, dignissim in aliquet sed, lacinia eget metus.
            Cras ultricies augue tellus, faucibus consequat nibh fringilla et. Cras commodo tellus faucibus, consectetur
            tortor sit amet, consectetur ex. Cras et accumsan mi. Morbi aliquam ligula ut sem facilisis, nec semper
            felis fringilla. In at nulla at erat pellentesque fermentum id ac augue. Nullam ac pellentesque massa.
            Nullam ut nibh mollis, volutpat justo non, commodo tortor. Duis egestas elementum odio. Vivamus fermentum
            porta justo, hendrerit luctus tortor commodo vitae. Ut laoreet mi eget pretium laoreet. Morbi rhoncus arcu
            eu ullamcorper congue. Vivamus massa felis, commodo at lacinia eu, finibus eget libero. Nulla hendrerit
            velit non ante elementum, finibus malesuada elit vulputate. In erat eros, bibendum et ultrices eget, luctus
            id ipsum. Curabitur et justo eu felis finibus semper ut non lacus. Aenean accumsan sagittis sem vitae
            egestas. Nullam tristique nibh sit amet lectus feugiat ullamcorper. Nunc imperdiet sed erat sed volutpat.
            Aliquam rhoncus diam non nibh pellentesque rutrum id id neque. Nam vulputate sapien ac orci tempus, id
            tristique tortor fringilla. Pellentesque sed rhoncus metus. Mauris sit amet libero massa. Donec placerat
            scelerisque nisi, eu pellentesque nisi volutpat a. Maecenas at mollis quam. Donec orci arcu, consequat sed
            libero sit amet, egestas tristique neque. Suspendisse iaculis venenatis erat, mollis fermentum purus
            molestie eu. Phasellus mollis malesuada odio id laoreet. In posuere mattis mi, a convallis mi finibus eu.
            Suspendisse sem libero, tincidunt quis velit quis, semper mollis dolor. Nullam semper felis magna, at
            iaculis velit rhoncus eu. Proin fringilla quam ullamcorper cursus bibendum. Nulla iaculis, risus cursus
            ornare bibendum, enim dolor interdum nisi, sit amet maximus massa sem in orci. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pulvinar tincidunt sodales. Sed nec
            purus ut justo iaculis molestie. Nunc lobortis libero ut velit condimentum ultrices. Phasellus eu augue
            ornare arcu consequat dapibus vitae at sem. Aliquam erat volutpat. Donec vel imperdiet arcu, id pretium
            dolor. Phasellus sit amet vehicula ex. Duis viverra consequat lacus semper ultrices. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam at congue lectus, quis
            faucibus velit. Aenean id eros ac arcu dictum luctus at non urna. Morbi urna lorem, rhoncus vel malesuada
            eget, scelerisque ut leo. Donec porta lacus quis enim condimentum vulputate sit amet et justo. Cras
            malesuada augue quis urna condimentum, non ornare massa aliquet. Morbi nec lacinia risus, sed interdum est.
            Sed facilisis ut eros eu tristique. Fusce semper dolor justo, at gravida elit fringilla ut. Ut sit amet odio
            quis sem consectetur ultrices eget lacinia est. Vivamus sed ultricies velit, ut dapibus leo. Integer viverra
            dolor nulla, gravida volutpat quam placerat vel. Duis ut ipsum risus. Vestibulum faucibus lacus nisl, nec
            mollis risus sollicitudin non. Sed tempor ex ac augue pretium, eu dapibus nulla volutpat. Aliquam aliquet
            lacus vitae quam imperdiet, eget tincidunt tellus blandit. Phasellus vehicula consequat mollis. Fusce eu
            luctus nisl. In tristique id ex dapibus porta. Pellentesque risus libero, tempus id mi vel, egestas
            elementum lorem. Nam nulla magna, commodo at ligula vitae, vulputate tincidunt elit. Nulla mollis est
            maximus, commodo nibh ac, posuere lacus. Integer nec sem quis velit vulputate vulputate nec tempor ipsum.
            Nunc vehicula lacinia eros, vel congue purus porttitor id. In egestas cursus dolor et ultricies. Mauris
            viverra auctor lorem a dignissim. Etiam sit amet neque id erat mollis congue et eget enim. Curabitur eu dui
            sit amet odio auctor ullamcorper tempus eu erat. Mauris nec tristique tellus. Aenean ut hendrerit arcu. In
            nec libero est. Morbi eget enim quis mi imperdiet convallis. Aenean quis elit quis sapien pellentesque
            accumsan nec ac ante. Maecenas tempor sollicitudin elit vitae commodo. In lobortis diam neque, at pretium
            libero cursus a. Nullam nec sem massa. Sed placerat sem vel felis pellentesque, vitae imperdiet tellus
            molestie. Proin bibendum, odio at commodo fermentum, sem metus mattis dolor, eget hendrerit dolor tellus et
            lectus. In ullamcorper dictum magna, eu ornare tortor dignissim non. Morbi finibus, velit ac aliquam
            fermentum, felis urna consectetur est, in dictum felis ante et leo. Cras eu magna ac dui semper ornare. Duis
            sed hendrerit massa, vel interdum urna. Nullam vitae tellus malesuada, congue sem a, lacinia nulla.
            Suspendisse metus mi, consectetur et tortor a, venenatis maximus metus. In vel elit vel ligula elementum
            fermentum. Praesent eu feugiat quam. Ut sed lacus vel ipsum fringilla fermentum. Vestibulum tempor semper
            ligula a dignissim. Praesent bibendum fermentum ipsum, id efficitur velit bibendum sit amet. Nulla lacinia
            iaculis est vitae eleifend. Praesent pulvinar nulla leo, vel suscipit dolor convallis hendrerit. Proin
            viverra odio dolor, ut accumsan leo ultrices et. Donec consequat metus sapien, quis lobortis orci tincidunt
            sit amet. Donec pretium sed velit sed aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            quis viverra dolor, non facilisis elit. Phasellus id libero aliquam, pellentesque ligula nec, lacinia lacus.
            Maecenas faucibus lobortis nunc vel fringilla. In ut lectus et neque varius molestie. Aliquam turpis magna,
            efficitur ac dictum efficitur, imperdiet quis tellus. Mauris tincidunt neque tristique, consequat magna eu,
            accumsan odio. Duis aliquet vulputate quam ac elementum. Vivamus sollicitudin, dolor placerat pellentesque
            tempus, tortor dui euismod dolor, a accumsan metus diam a massa. Ut eget nisl a tortor hendrerit
            sollicitudin. Suspendisse eu sagittis lacus, in convallis magna. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. In fermentum quis mauris in blandit. Praesent dictum tortor a
            purus auctor, non finibus risus fermentum. Maecenas facilisis, sem at placerat maximus, nunc odio consequat
            est, sit amet facilisis elit sem at felis. Mauris auctor volutpat mi, nec semper ligula gravida eu. Cras ut
            enim risus. Morbi aliquet facilisis elit vitae consectetur. Vivamus pretium urna lectus, ac scelerisque nisl
            mattis ac. Cras rhoncus ante risus, euismod luctus purus suscipit non. Mauris quis ligula quis leo
            consectetur ultricies. Nulla finibus magna ut tellus placerat, finibus tempus ipsum luctus. Aenean ac
            bibendum lectus, at rhoncus odio. Nam non facilisis ipsum, ac tempor turpis. Integer quis placerat purus. In
            condimentum augue risus, non fringilla mauris eleifend non. Nunc rhoncus, dolor nec sagittis molestie, ante
            velit eleifend erat, in maximus leo turpis aliquam libero. Praesent nec turpis non diam vulputate vulputate.
            Mauris elit ligula, eleifend eget ex in, porttitor laoreet urna. Donec vitae nunc ac purus varius hendrerit
            in vel dui. Vestibulum bibendum, felis non aliquet dignissim, mi ex dictum est, sit amet cursus arcu odio id
            metus. Vestibulum faucibus nisi a lacus efficitur pharetra. Aliquam bibendum, tortor id cursus efficitur,
            eros ligula elementum lorem, eu vestibulum dui lectus pretium neque. Proin mattis ex in varius eleifend. In
            rutrum ut turpis ac interdum. Nunc rhoncus nulla quis ex vehicula, rhoncus vehicula nunc pretium. Mauris
            vestibulum, odio ac ornare eleifend, orci augue pharetra purus, eget rhoncus purus eros vel leo. Maecenas
            tempus ex nec orci blandit, in hendrerit diam vulputate. Aenean porttitor et enim vulputate luctus. Fusce
            varius nulla eu purus sollicitudin rhoncus ac eu orci. Sed in fringilla leo, sed sagittis leo. Fusce vel
            metus mi. Curabitur ac libero id quam semper ullamcorper. Ut urna erat, faucibus vel blandit sed, efficitur
            ornare augue. Maecenas libero arcu, ullamcorper ac lacinia vel, euismod ut sem. Nulla facilisi. Sed dolor
            purus, consequat eget faucibus sit amet, fringilla non leo. Nunc ornare feugiat felis at rhoncus. Donec ut
            vulputate nisl. Morbi mollis consectetur libero, id fermentum elit porta sed. Nulla facilisi. Vestibulum
            ipsum diam, sodales non mauris quis, tempus mollis leo. In faucibus tristique quam in vestibulum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse
            accumsan sapien odio, in blandit lectus condimentum vitae. Ut at pharetra turpis. Phasellus efficitur,
            turpis in porta dapibus, mauris arcu egestas dolor, quis mattis erat felis vel velit. Curabitur non justo
            enim. Maecenas sit amet ipsum metus. In non dolor mauris. Vestibulum commodo mollis aliquet. Curabitur nisi
            sapien, feugiat semper nunc sit amet, suscipit egestas velit. Nullam porttitor aliquam libero ac convallis.
            Mauris cursus convallis leo nec mollis. Pellentesque purus ligula, congue vitae libero viverra, commodo
            pretium nulla. Praesent ac ligula porttitor, aliquam massa vitae, condimentum velit. Curabitur ornare eros
            eget erat placerat ornare. Duis facilisis nisl non sapien posuere rutrum. Nam mauris libero, commodo ut
            fringilla in, pharetra quis ante. Aliquam vitae dignissim nisl. Duis a vehicula diam. Mauris varius elit vel
            purus pulvinar, sit amet dapibus erat dapibus. Pellentesque fermentum arcu at libero egestas, non
            scelerisque lacus consectetur. Vestibulum sagittis arcu massa, quis volutpat sapien fermentum quis. Mauris
            quis leo vitae risus consectetur tempor. Quisque neque felis, blandit nec arcu eu, facilisis vestibulum
            elit. Etiam iaculis mi sodales ex ultricies, sed aliquet ipsum condimentum. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed dui vitae nulla hendrerit molestie.
            Donec cursus in sem nec blandit. Donec ac aliquet enim. Integer rutrum nisl eu turpis fringilla auctor.
            Fusce sagittis pulvinar est nec fermentum. Etiam sit amet sollicitudin est. Sed scelerisque nulla id libero
            rutrum, ut fringilla orci commodo. Nunc arcu diam, varius non ultrices ac, porta eget turpis. Etiam
            convallis eleifend dui, sed malesuada lacus condimentum vitae. Quisque gravida et velit a scelerisque. Morbi
            eget condimentum libero, vel varius lectus. Sed non arcu rhoncus, porta est eu, sollicitudin augue.
            Pellentesque blandit ex at enim consequat, a porta nunc congue. Phasellus ac elit sit amet tortor tempus
            cursus vitae non sem. Aliquam in magna bibendum, condimentum odio vel, venenatis est. Maecenas non congue
            diam, ac ultrices urna. Morbi dignissim consectetur venenatis. Donec at lectus ac nunc aliquet pellentesque
            vitae tincidunt est. Phasellus nulla sapien, laoreet eget est et, pulvinar tincidunt risus. Cras faucibus
            risus sed ipsum aliquam feugiat. Cras ultricies, erat quis aliquet egestas, eros tellus elementum dolor, nec
            finibus libero elit nec orci. Sed orci nunc, vestibulum sit amet tellus vel, eleifend interdum velit. Sed
            dolor felis, aliquet et ex sed, pellentesque pharetra ipsum. In rutrum purus tortor, dictum eleifend elit
            elementum sit amet. Nunc placerat, enim quis tempor maximus, tellus nunc rutrum nisl, non dignissim lectus
            dolor nec magna. Nunc vel efficitur nulla, quis sodales nibh. Sed gravida est a lacus rutrum placerat.
            Curabitur vel erat non eros facilisis pharetra id vitae massa. Aenean interdum scelerisque velit, eget
            aliquam lectus hendrerit varius. In hac habitasse platea dictumst. Ut euismod dapibus ligula, sed bibendum
            risus mollis porttitor. Nunc dapibus est sed dignissim faucibus. Curabitur condimentum lacus at luctus
            viverra. Nunc vitae pretium tortor. Cras sagittis, nisl id posuere malesuada, arcu erat euismod tellus, sit
            amet bibendum justo lorem ac massa. Ut tortor sapien, molestie eu nisi quis, elementum suscipit turpis. Duis
            sed eleifend ante. Vestibulum purus odio, rhoncus ut porta ut, porttitor et enim. Duis ex augue, maximus a
            odio in, ornare auctor nisl. Donec lacinia augue pellentesque, tempus nibh in, convallis libero. In ac
            sollicitudin metus, ut vestibulum metus. Etiam ac condimentum erat, vel ornare ante. Curabitur fermentum
            consequat lacus, eu tempor massa eleifend non. Duis maximus sem egestas gravida gravida. Vestibulum leo
            massa, luctus non fermentum ac, gravida et metus. Morbi eget ex dictum, ornare nibh sed, iaculis arcu.
            Nullam placerat enim nec placerat egestas. Vivamus vitae luctus libero, non aliquam diam. Sed tincidunt nibh
            elit, sed maximus velit commodo ut. Pellentesque at ipsum nec odio cursus consectetur. Fusce hendrerit
            imperdiet interdum. Etiam ut nisi sit amet nulla varius fermentum a quis dolor. Morbi iaculis felis nec
            placerat pretium. In facilisis justo in dui varius, ac maximus purus pulvinar. Curabitur convallis urna in
            ultricies pulvinar. Mauris aliquet, quam a gravida facilisis, erat ex varius odio, eu pharetra felis libero
            at nunc. Mauris sit amet luctus massa. Aenean a sapien mauris. Integer placerat eleifend nulla, in lobortis
            dui tempor a. Quisque quis ipsum id urna fermentum cursus id et quam. Curabitur pharetra suscipit
            consectetur. Pellentesque fermentum maximus diam aliquet tristique. Quisque placerat erat eget augue tempus
            scelerisque. Etiam ante libero, ultricies vitae eros in, cursus imperdiet est. Mauris enim odio, feugiat et
            enim eget, lobortis hendrerit lorem. Aenean ultricies, erat vitae efficitur rutrum, nibh velit egestas
            lectus, sed lobortis sem turpis quis massa. Vivamus ultrices turpis in scelerisque interdum. Praesent
            viverra rutrum lacus eget aliquet. Nullam in neque consectetur, vestibulum ante eu, scelerisque leo. Etiam
            finibus tempor diam eget volutpat. Quisque et suscipit velit. Nunc dignissim massa nec nibh fermentum
            elementum. Praesent quis commodo diam. Donec odio nisi, lobortis sed ligula nec, faucibus vulputate diam.
            Praesent tincidunt hendrerit egestas. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Proin nisi quam, pellentesque nec augue at, mollis efficitur justo. Cras dignissim
            dolor non pharetra vehicula. Quisque scelerisque purus mi, nec accumsan sapien molestie id. Pellentesque
            consectetur diam eu dolor mattis scelerisque. Suspendisse vestibulum, lectus sit amet auctor ornare, ante
            felis euismod felis, at tincidunt lorem justo vel ligula. Ut molestie hendrerit vulputate. Cras posuere
            vestibulum diam ac fringilla. Vivamus porta efficitur tellus a malesuada. Pellentesque mattis sodales nulla,
            eu pharetra nisi pharetra at. Curabitur ligula mi, consectetur sit amet elementum at, semper id elit. Sed
            fringilla leo vel nibh fermentum, nec bibendum sapien posuere. In velit ante, feugiat vitae gravida ut,
            dignissim ut quam.
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
