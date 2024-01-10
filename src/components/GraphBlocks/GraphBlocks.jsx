import React from 'react';
import GraphProduction from '../GraphProduction/GraphProduction';
import { graphDataExpenses, graphDataProduction, graphDataRevenue } from '../../data/graphData';
import GraphRevenue from '../GraphRevenue/GraphRevenue';
import GraphExpenses from '../GraphExpenses/GraphExpenses';
import { useStateContext } from '../../context/ContextProvider';

const GraphBlock = ({ selectedField, setSelectedField, isFavourite = false }) => {
  const { deleteGraph } = useStateContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[24px] gap-y-[18px] mt-[12px]">
      {selectedField === 'Production' &&
        graphDataProduction.map((item, index) => (
          <GraphProduction
            dataMonth={item.dataMonth}
            dataYear={item.dataYear}
            dataDay={item.dataDay}
            key={index}
            title={item.label}
            percent={item.percent}
            index={index + 1}
            deleteGraph={deleteGraph}
            isFavourite={isFavourite}
          />
        ))}
      {selectedField === 'Revenue' &&
        graphDataRevenue.map((item, index) => (
          <GraphRevenue
            data={item}
            key={index}
            title={item.label}
            percent={item.percent}
            index={index + 1}
            deleteGraph={deleteGraph}
            isFavourite={isFavourite}
          />
        ))}
      {selectedField === 'Expenses' &&
        graphDataExpenses.map((item, index) => (
          <GraphExpenses
            data={item}
            key={index}
            title={item.label}
            percent={item.percent}
            index={index + 1}
            deleteGraph={deleteGraph}
            isFavourite={isFavourite}
          />
        ))}
    </div>
  );
};

export default GraphBlock;
