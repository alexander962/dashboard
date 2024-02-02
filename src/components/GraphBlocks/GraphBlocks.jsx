import React from 'react';
import GraphProduction from '../GraphProduction/GraphProduction';
import { graphDataExpenses, graphDataProduction, graphDataRevenue } from '../../data/graphData';
import GraphRevenue from '../GraphRevenue/GraphRevenue';
import GraphExpenses from '../GraphExpenses/GraphExpenses';
import { useStateContext } from '../../context/ContextProvider';

const GraphBlock = ({ selectedField, graphsData, isFavourite = false, currentPage, setCurrentPage, onDeleteGraph }) => {
  const { deleteGraph } = useStateContext();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[24px] gap-y-[18px] mt-[12px]">
      {selectedField === 'Production' &&
        graphsData?.map((item, index) => (
          <GraphProduction
            data={item}
            dataMines={item?.commodityProduction}
            key={index}
            index={index + 1}
            deleteGraph={deleteGraph}
            isFavourite={isFavourite}
            onDeleteGraph={onDeleteGraph}
            // dataMonth={item.dataMonth}
            // dataDay={item.dataDay}
            // title={item.label}
            // percent={item.percent}
          />
        ))}
      {selectedField === 'Processed' &&
        graphsData?.map((item, index) => (
          <GraphProduction
            data={item}
            dataMines={item?.oreProcessed}
            key={index}
            index={index + 1}
            deleteGraph={deleteGraph}
            isFavourite={isFavourite}
            onDeleteGraph={onDeleteGraph}
            // dataMonth={item.dataMonth}
            // dataDay={item.dataDay}
            // title={item.label}
            // percent={item.percent}
          />
        ))}
      {selectedField === 'Costs' &&
        graphsData?.map((item, index) => (
          <GraphProduction
            data={item}
            dataMines={item?.processingCosts}
            key={index}
            index={index + 1}
            deleteGraph={deleteGraph}
            isFavourite={isFavourite}
            onDeleteGraph={onDeleteGraph}
            // dataMonth={item.dataMonth}
            // dataDay={item.dataDay}
            // title={item.label}
            // percent={item.percent}
          />
        ))}
      {/*{selectedField === 'Revenue' &&*/}
      {/*  graphDataRevenue.map((item, index) => (*/}
      {/*    <GraphRevenue*/}
      {/*      data={item}*/}
      {/*      key={index}*/}
      {/*      title={item.label}*/}
      {/*      percent={item.percent}*/}
      {/*      index={index + 1}*/}
      {/*      deleteGraph={deleteGraph}*/}
      {/*      isFavourite={isFavourite}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*{selectedField === 'Expenses' &&*/}
      {/*  graphDataExpenses.map((item, index) => (*/}
      {/*    <GraphExpenses*/}
      {/*      data={item}*/}
      {/*      key={index}*/}
      {/*      title={item.label}*/}
      {/*      percent={item.percent}*/}
      {/*      index={index + 1}*/}
      {/*      deleteGraph={deleteGraph}*/}
      {/*      isFavourite={isFavourite}*/}
      {/*    />*/}
      {/*  ))}*/}
    </div>
  );
};

export default GraphBlock;
