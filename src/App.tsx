import React, { useEffect, useMemo, ReactElement } from "react";
import { BackGroundSection } from "@components/BackGroundSection";
import { HeaderToolBar } from "@components/HeaderToolBar";
import { TodoList } from "@components/TodoList";
import { TargetItem } from "@components/TargetItem";
import { ShowScope } from "@components/ShowScope";
import { ToHideButton } from "@components/ToHideButton";
import { SendTargetItem } from "@components/SendTargetItem";
import { useMediaQuery } from "react-responsive"
import { LeftMenu } from "@components/LeftMenu";
import store from "@/store/index";
import { Provider, useDispatch, useSelector } from "react-redux";
import { finished } from "stream";



const Tablet = ({ children }: { children: ReactElement }) => {
  const isTablet = useMediaQuery({ minWidth: 820 });
  return isTablet ? children : null;
}

const Mobile = ({ children }: { children: ReactElement }) => {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  return isMobile ? children : null;
}

interface IListItem {
  id: number;
  content: string;
  finished: boolean;
}

const useFinishedList = (showFinished = false, list: IListItem[]): IListItem[] => {
  const finishedList = useMemo(() => {
    const tList: IListItem[] = [];
    if (showFinished) {
      list.forEach((i: any) => {
        if (i.finished) {
          tList.push(i);
        }
      });
    }
    return tList;
  }, [showFinished, list])
  return finishedList;
}
const useUnFinishedList = (list: IListItem[]): IListItem[] => {
  const unFinishedList = useMemo(() => {
    let unFinishedList: IListItem[] = [];
    list.forEach((i: any) => {
      if (!i.finished) {
        unFinishedList.push(i);
      }
    });
    return unFinishedList
  }, [list])
  return unFinishedList;
}

function App() {
  const list = useSelector((state: any) => state.list);
  const showFinished = useSelector((state: any) => state.showFinished)
  const finishedList = useFinishedList(showFinished, list);
  const unFinishedList = useUnFinishedList(list);
  return (
    <>

      <BackGroundSection>
        <HeaderToolBar />
        <ShowScope>
          <TodoList>
            {
              unFinishedList.map((i: IListItem) => {
                return (
                  <TargetItem
                    key={i.id}
                    id={i.id}
                    content={i.content}
                    finished={i.finished}
                  ></TargetItem>
                )
              })
            }
          </TodoList>
          <ToHideButton />
          <TodoList>
            {finishedList.map((i: IListItem) => {
              return (
                <TargetItem
                  key={i.id}
                  id={i.id}
                  content={i.content}
                  finished={i.finished}
                ></TargetItem>
              )
            })
            }
          </TodoList>
          <SendTargetItem />
        </ShowScope>
      </BackGroundSection>
      {/* <Modal title="二维码" /> */}
    </>
  );
}

export default App;
