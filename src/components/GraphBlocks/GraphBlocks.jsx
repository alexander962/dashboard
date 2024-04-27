import React from 'react';
import GraphProduction from '../GraphProduction/GraphProduction';
// import { graphDataExpenses, graphDataProduction, graphDataRevenue } from '../../data/graphData';
// import GraphRevenue from '../GraphRevenue/GraphRevenue';
// import GraphExpenses from '../GraphExpenses/GraphExpenses';
import { useStateContext } from '../../context/ContextProvider';

const GraphBlock = ({ selectedField, graphsData, isFavourite = false, currentPage, setCurrentPage, onDeleteGraph }) => {
  const { deleteGraph } = useStateContext();
  console.log(graphsData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[24px] gap-y-[18px] mt-[12px]">
      {selectedField === 'Production' &&
        graphsData?.map((item, index) => {
          // const newValue = item?.commodityProduction[item?.commodityProduction.length - 1].tone;
          // const previousValue = item?.commodityProduction[item?.commodityProduction.length - 2].tone;
          // let percent;
          // if (newValue && newValue) {
          //   percent = ((newValue - previousValue) / previousValue) * 100;
          //   percent = percent.toFixed(2);
          // } else {
          //   percent = '0';
          // }

          return (
            <GraphProduction
              data={item}
              dataMines={item?.production}
              key={index}
              index={index + 1}
              deleteGraph={deleteGraph}
              isFavourite={isFavourite}
              onDeleteGraph={onDeleteGraph}
              // percent={percent}
              // dataMonth={item.dataMonth}
              // dataDay={item.dataDay}
              // title={item.label}
              // percent={item.percent}
            />
          );
        })}
      {selectedField === 'Processed' &&
        graphsData?.map((item, index) => {
          // const newValueStr = item?.oreProcessed[item?.oreProcessed.length - 1]?.tone;
          // const previousValueStr = item?.oreProcessed[item?.oreProcessed.length - 2]?.tone;
          //
          // const newValue = newValueStr ? parseFloat(newValueStr.replace(/\s/g, '')) : NaN;
          // const previousValue = previousValueStr ? parseFloat(previousValueStr.replace(/\s/g, '')) : NaN;
          //
          // console.log(newValue);
          // let percent;
          // if (!isNaN(newValue) && !isNaN(previousValue) && previousValue !== 0) {
          //   percent = ((newValue - previousValue) / previousValue) * 100;
          //   percent = percent.toFixed(2);
          // } else {
          //   percent = 0;
          // }

          const newValue = item?.oreProcessed[item?.oreProcessed.length - 1].tone;
          const previousValue = item?.oreProcessed[item?.oreProcessed.length - 2].tone;
          let percent;
          if (newValue && newValue) {
            percent = ((newValue - previousValue) / previousValue) * 100;
            percent = percent.toFixed(2);
          } else {
            percent = '0';
          }
          return (
            <GraphProduction
              data={item}
              dataMine={item?.oreProcessed}
              key={index}
              index={index + 1}
              deleteGraph={deleteGraph}
              isFavourite={isFavourite}
              onDeleteGraph={onDeleteGraph}
              percent={percent}
              // dataMonth={item.dataMonth}
              // dataDay={item.dataDay}
              // title={item.label}
              // percent={item.percent}
            />
          );
        })}
      {selectedField === 'Costs' &&
        graphsData?.map((item, index) => {
          const newValue = item?.processingCost[item?.processingCost.length - 1].tone;
          const previousValue = item?.processingCost[item?.processingCost.length - 2].tone;
          let percent;
          if (newValue && newValue) {
            percent = ((newValue - previousValue) / previousValue) * 100;
            percent = percent.toFixed(2);
          } else {
            percent = '0';
          }
          return (
            <GraphProduction
              data={item}
              dataMine={item?.processingCost}
              key={index}
              index={index + 1}
              deleteGraph={deleteGraph}
              isFavourite={isFavourite}
              onDeleteGraph={onDeleteGraph}
              percent={percent}
              // dataMonth={item.dataMonth}
              // dataDay={item.dataDay}
              // title={item.label}
              // percent={item.percent}
            />
          );
        })}
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
