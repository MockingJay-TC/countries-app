import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useContext, useEffect, useState } from "react";
import { RegionContext } from "../context/Context";
import { useAppSelector } from "../store/hook";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const { setFilter } = useContext(RegionContext);
  const { countries } = useAppSelector((state) => state.countries);
  const [selected, setSelected] = useState("Filter by region");

  useEffect(() => {
    if (setFilter) {
      setFilter(selected);
    }
  });

  let regions: string[] = [];

  const getRegions = () => {
    countries.map((country) => {
      regions.push(country.region);
    });
    regions = [...new Set(regions)];
    return regions;
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }: { open: boolean }) => (
        <>
          <div className="relative mt-2 w-[200px] h-14 font-normal">
            <Listbox.Button className="relative h-full  w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-search ring-inset ring-0   border-none focus:outline-none  sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {getRegions().map((region, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }: { active: unknown }) =>
                      classNames(
                        active ? "bg-skin-invert text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={region}
                  >
                    {({
                      selected,
                      active,
                    }: {
                      selected: unknown;
                      active: unknown;
                    }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {region}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-gray-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
