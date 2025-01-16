import React, { useState, useEffect } from "react";

const Settings = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [addedTreatments, setAddedTreatments] = useState({
    Injectables: [],
    "Skin Improvement": [],
    "Hair Removal": [],
    "Soft Surgery": [],
    "Plastic Surgery": [],
  });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const savedTreatments =
      JSON.parse(localStorage.getItem("treatments")) || {};
    setAddedTreatments(savedTreatments);
  }, []);

  useEffect(() => {
    localStorage.setItem("treatments", JSON.stringify(addedTreatments));
  }, [addedTreatments]);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(
      activeSubCategory === subCategory ? null : subCategory
    );
  };

  const handleAddTreatment = () => {
    if (
      selectedTreatment &&
      !addedTreatments[activeSubCategory]?.includes(selectedTreatment)
    ) {
      setAddedTreatments({
        ...addedTreatments,
        [activeSubCategory]: [
          ...addedTreatments[activeSubCategory],
          selectedTreatment,
        ],
      });
    }
    setSelectedTreatment("");
    setIsAdding(false);
  };

  const handleRemoveTreatment = (treatment) => {
    setAddedTreatments({
      ...addedTreatments,
      [activeSubCategory]: addedTreatments[activeSubCategory].filter(
        (item) => item !== treatment
      ),
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-[30px] text-[#444753] font-[700] mb-4">Settings</h1>
      <div className="flex gap-10 flex-col xl:flex-row">
        <div className="flex space-x-4">
          <ul className="space-y-2 w-[252px] h-[220px] bg-[#f3f6ff] p-3 rounded-lg shadow-sm">
            <li>
              <button
                onClick={() => handleCategoryClick("General")}
                className={`block w-full px-2 py-3 rounded-lg text-left text-[14px] font-[500] ${
                  activeCategory === "General"
                    ? "bg-white text-[#6968EC]"
                    : "text-[#71788E]"
                }`}
              >
                General
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("Password")}
                className={`block w-full text-left px-2 py-3 rounded-lg text-[14px] font-[500] ${
                  activeCategory === "Password"
                    ? "bg-white text-[#6968EC]"
                    : "text-[#71788E]"
                }`}
              >
                Password
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("Price")}
                className={`block w-full text-left px-2 py-3 rounded-lg text-[14px] font-[500] ${
                  activeCategory === "Price"
                    ? "bg-white text-[#6968EC]"
                    : "text-[#71788E]"
                }`}
              >
                Price
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("Treatment")}
                className={`block w-full text-left px-2 py-3 rounded-lg text-[14px] font-[500] ${
                  activeCategory === "Treatment"
                    ? "bg-white text-[#6968EC]"
                    : "text-[#71788E]"
                }`}
              >
                Treatment
              </button>
            </li>
          </ul>
        </div>

        <div>
          {activeCategory === "Treatment" && (
            <>
              <h1 className="text-[30px] text-[#444753] font-[700] mb-5">
                Treatments
              </h1>
              <div className="flex flex-col space-y-4">
                {[
                  "Injectables",
                  "Skin Improvement",
                  "Hair Removal",
                  "Soft Surgery",
                  "Plastic Surgery",
                ].map((subCategory) => (
                  <button
                    key={subCategory}
                    onClick={() => handleSubCategoryClick(subCategory)}
                    className={`px-4 py-3 rounded-lg text-[14px] font-[500] text-start w-[250px] ${
                      activeSubCategory === subCategory
                        ? "bg-[#F2F5FF] text-[#6968EC]"
                        : "text-[#71788E]"
                    }`}
                  >
                    {subCategory}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          {activeSubCategory && (
            <>
              <div className="bg-[#F9FAFF] p-2 mt-16 ml-5 w-[300px] lg:w-full ">
                <div className="mt-5">
                  {addedTreatments[activeSubCategory]?.length > 0 && (
                    <div>
                      <h2 className="text-[15px] font-[700] text-[#444753] ">
                        Skin improvement (20)
                      </h2>
                      <p className="text-[#AEB2BF] font-[500] text-sm mb-5">
                        Treatments
                      </p>
                    </div>
                  )}
                  <ul>
                    {addedTreatments[activeSubCategory]?.map(
                      (treatment, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center text-[14px] font-[500] text-[#444753] mb-2 border border-gray-300 p-3 rounded-lg"
                        >
                          {treatment}
                          <button
                            onClick={() => handleRemoveTreatment(treatment)}
                            className="text-black border-l-2 px-1 "
                          >
                            ✕
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2 mt-5">
                  <div className="flex gap-2">
                    <select
                      className="px-4 py-2 rounded-lg text-[14px] border border-[#71788E] w-[500px] 2xl:w-[607px] h-[48px]"
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                    >
                      <option value="">Select Treatment..</option>
                      <option value="Botox">Botox</option>
                      <option value="Fillers">Fillers</option>
                      <option value="PRP">PRP</option>
                      <option value="Microneedling">Microneedling</option>
                      <option value="Chemical Peel">Chemical Peel</option>
                      <option value="Facial">Facial</option>
                      <option value="Laser Hair Removal">
                        Laser Hair Removal
                      </option>
                      <option value="Laser Skin Resurfacing">
                        Laser Skin Resurfacing
                      </option>
                      <option value="Ultherapy">Ultherapy</option>
                      <option value="Cryolipolysis">Cryolipolysis</option>
                      <option value="LED Therapy">LED Therapy</option>
                      <option value="Thread Lift">Thread Lift</option>
                      <option value="CoolSculpting">CoolSculpting</option>
                      <option value="Tattoo Removal">Tattoo Removal</option>
                      <option value="Acne Scar Treatment">
                        Acne Scar Treatment
                      </option>
                      <option value="Stretch Mark Removal">
                        Stretch Mark Removal
                      </option>
                      <option value="IPL Photofacial">IPL Photofacial</option>
                      <option value="Microneedling with PRP">
                        Microneedling with PRP
                      </option>
                      <option value="Hydrafacial">Hydrafacial</option>
                      <option value="Radiofrequency Skin Tightening">
                        Radiofrequency Skin Tightening
                      </option>
                      <option value="Exosome Therapy">Exosome Therapy</option>
                    </select>

                    {!isAdding && (
                      <button
                        onClick={() => setIsAdding(true)}
                        className="w-[48px] h-[48px] rounded-xl text-[20px] bg-white text-[#6968EC] border border-gray-300"
                      >
                        +
                      </button>
                    )}
                  </div>
                  <div className="flex space-x-2 mt-3 flex-col xl:flex-row">
                    <button
                      onClick={() => setIsAdding(false)}
                      className="px-4 py-2 border border-gray-200 text-black rounded-lg w-[100%] 2xl:w-[327px] h-[48px]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddTreatment}
                      className="px-4 py-2 bg-[#6968EC] text-white rounded-lg w-[100%] 2xl:w-[327px] h-[48px]"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
