export default function() {

    function onHeadClick(e){
        document.querySelector(".tb-heading.selected").classList.remove('selected');
        e.target.parentNode.classList.add('selected')
    }

    return (
        <section id="specifications" className="container mx-auto lg:w-2/3 grid items-stretch justify-stretch gap-6 px-4 py-12">
            <h4 className='subheading w-full text-center'>Specifications</h4>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center selected" onClick={onHeadClick}>
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm">STRUCTURE</div>
                <div className="">Floors </div>
                <div className="">Ground + 1ST Floor (2nd Floor in Villa 6 & 7) </div>
                <div className="">Structure system </div>
                <div className="">RCC Framed Structure – Earthquake resistant (Seismic compliant - Zone 3) </div>
                <div className="">Masonry </div>
                <div className="">200mm external walls & 100mm internal walls </div>
                <div className="">Floor to Floor Height </div>
                <div className="">3250 mm (incl. slab) </div>
                <div className="">ATT </div>
                <div className="">Anti-termite treatment will be provided </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>FLOOR FINISHES</div>
                <div className="">Living / Dining / Foyer & Staircase</div>
                <div className="">Marble flooring </div>
                <div className="">Master bedroom </div>
                <div className="">Wooden flooring </div>
                <div className="">Other Bedrooms & Kitchen </div>
                <div className="">Vitrified Tiles (1200mm x 1200mm) </div>
                <div className="">Bathroom </div>
                <div className="">Anti-skid Ceramic tile </div>
                <div className="">Outdoors / Car Park / 1st floor Terrace </div>
                <div className="">Anti-skid tile </div>
                <div className="">Open Terrace - 2nd floor </div>
                <div className="">Weather resistant pressed clay tile </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>WALL & CEILING FINISHES</div>
                <div className="">Internal Walls & Ceilings </div>
                <div className="">2 Coats of Putty, 1 Coat of Primer & 2 Coats of Premium Emulsion Paint </div>
                <div className="">Exterior Walls </div>
                <div className="">Designer Texture finish – As per Architect’s design intent </div>
                <div className="">Bathroom </div>
                <div className="">Wall dado - 2285 mm from FFL </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>KITCHEN/UTILITY</div>
                <div className="">Electrical Provision </div>
                <div className="">One point each for Refrigerator, Hob, Chimney, Water Purifier, Washing machine and Dish washer </div>
                <div className="">Plumbing Provision </div>
                <div className="">One point each for Sink faucet, Water Purifier, Washing machine & Dish Washer </div>
                <div className="">Others </div>
                <div className="">Open Kitchen & Utility (Counter Top, Wall Dado, Sink & Sink faucet – Not part of standard specifications) </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>HANDRAIL FINISH</div>
                <div className="">Staircase </div>
                <div className="">MS Handrails with Wooden handle as per architect’s design </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>BATHROOM</div>
                <div className="">Sanitary Fixtures </div>
                <div className="">American Standard / Kohler (or) equivalent </div>
                <div className="">CP Fittings </div>
                <div className="">Grohe / Kohler (or) equivalent </div>
                <div className="">Master Bathroom </div>
                <div className="">Rain Shower, Glass Shower Partition, Counter Washbasin and Concealed Cistern </div>
                <div className="">Other Bathrooms </div>
                <div className="">Multi-flow Shower, Counter Washbasin and Concealed Cistern </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>DOORS</div>
                <div className="">Main Door </div>
                <div className="">1200mm x 2400mm - Teak Wood Frame with Double side veneer finish shutter with Digital Door lock. Ironmongeries like hinges, tower bolt, door stopper of Yale/Dorma equivalent brands. </div>
                <div className="">Bedroom Doors </div>
                <div className="">1000mm x 2285mm - First quality seasoned Wood Frame with Double side veneer finish shutter with Yale/Dorma or equivalent quality door hardware </div>
                <div className="">Bathroom Doors </div>
                <div className="">2285mm High – Waterproof Frame & shutter </div>
                <div className="">Other External Doors </div>
                <div className="">2285mm High - Waterproof Frame & shutter (or) external Steel door with elegant wood finish </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>WINDOWS & FRENCH DOORS</div>
                <div className="">Windows </div>
                <div className="">Aluminium / UPVC windows with see-through Plain Glass & MS Grill </div>
                <div className="">French Doors </div>
                <div className="">Aluminium / UPVC Doors with Toughened glass without Grills </div>
                <div className="">Ventilators </div>
                <div className="">Aluminium / UPVC with Suitable louvered Glass Panels & MS Grill </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>ELECTRICAL FIXTURES & FITTINGS</div>
                <div className="">Power Supply </div>
                <div className="">3 Phase power supply will be provided </div>
                <div className="">Safety Devices </div>
                <div className="">MCB, ELCB & DB of Honeywell / Schneider (or) equivalent brands </div>
                <div className="">Cables / Wires </div>
                <div className="">Fire Retardant Low Smoke (FRLS) copper wires of Finolex / Polycab (or) equivalent brands </div>
                <div className="">Switches & Sockets </div>
                <div className="">Modular Switches and Sockets - Honeywell / Schneider (or) equivalent brands </div>
                <div className="">Air Conditioner Points </div>
                <div className="">Split AC points will be provided for Living, Family, Home theatre & all bedrooms (Electrical & Core-Cutting provision Only – Does not involve copper piping) </div>
                <div className="">DTH / TV Points </div>
                <div className="">DTH / TV Point will be given in Living, Home theatre & Master Bedroom </div>
                <div className="">Power Backup </div>
                <div className="">Electrical provision for domestic UPS / Inverter (Wiring & conduit provision for Lighting & Fan Points) </div>
            </div>
            <div className="tb-heading w-full grid grid-cols-2 gap-px justify-center">
                <div className="col-span-2 text-center primary-btn px-4 py-2 rounded-sm" onClick={onHeadClick}>ADDITIONAL FEATURES</div>
                <div className="">Intercom Point </div>
                <div className="">Provision will be given in Living Room & Master Bedroom </div>
                <div className="">External Gas Bunk </div>
                <div className="">External Gas Bunk provision with concealed pipe line into Kitchen </div>
                <div className="">Solar water heater </div>
                <div className="">200 litres Solar Water Heater for all villas </div>
                <div className="">Landscaping </div>
                <div className="">Suitable External hard / soft Landscaping as per architect’s design </div>
            </div>
        </section>
    )
}