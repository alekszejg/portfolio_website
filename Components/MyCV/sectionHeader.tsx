type SectionHeaderProps = {headerWrapperClass: string, iconID: string, icon: string, headerClass: string, header: string};

export default function SectionHeader(props: SectionHeaderProps) {
    const { headerWrapperClass, iconID, icon, headerClass, header } = props;
    return (
        <div className={headerWrapperClass}>
            <img id={iconID} src={icon} alt="" />
            <h2 className={headerClass}>{header}</h2>
        </div> 
    );
}